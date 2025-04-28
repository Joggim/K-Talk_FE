import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  TopBar,
  Icon,
  ChatList,
  RecordingControls,
  TryAgainMessageBox,
  ReplyLoadingMessageBox,
} from './styles';
import { SentMessageLayout } from './SentMessage/styles';
import { RcvdMessageLayout } from './RcvdMessage/styles';
import NavBar from '../../components/NavBar/NavBar';
import CircleButton from '../../components/CircleButton';
import BounceLoader from '../../components/BounceLoader';
import RcvdMessage from './RcvdMessage';
import SentMessage from './SentMessage';
import Microphone from '../../components/Icons/Microphone';
import Pause from '../../components/Icons/Pause';
import Setting from '../../components/Icons/Setting';
import theme from '../../styles/theme';
import { MessageData, SentMessageProps } from '../../apis/talkbot/dto';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import {
  getMessageListApi,
  postSTTApi,
  getFeedbackApi,
  postChatReplyApi,
} from '../../apis/talkbot';

const TalkBotPage: React.FC = () => {
  const firstLoadRef = useRef(true);
  const scrollBottomRef = useRef<HTMLDivElement | null>(null); // 전체 채팅 하단 기준
  const lastMessageRef = useRef<HTMLDivElement | null>(null); // 마지막 메시지용 (피드백 열릴 때)

  const [messages, setMessages] = useState<MessageData[]>();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [newMessageId, setNewMessageId] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPronounceError, setIsPronounceError] = useState(false);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [isReplyLoading, setIsReplyLoading] = useState(false);

  const [recordedFile, setRecordedFile] = useState<File | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    getMessageList();
  }, []);

  useEffect(() => {
    if (messages?.length && messages[messages.length - 1].type === 'received') {
      startRecording();
    }
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({
        behavior: 'auto',
      });
      firstLoadRef.current = false;
    }
  };

  // 녹음 시작 (RcvdMessage가 나오면 자동 시작)
  useEffect(() => {
    if (messages && messages[currentMessageIndex]?.type === 'received') {
      startRecording();
    }
  }, [currentMessageIndex]);

  const requestMicrophoneAccess = async () => {
    try {
      // 권한 상태 확인
      const permission = await navigator.permissions.query({
        name: 'microphone' as any,
      });

      if (permission.state === 'denied') {
        alert(
          '마이크 사용이 차단되었습니다. 브라우저 설정에서 마이크 권한을 허용해주세요.'
        );
        return false;
      }

      return true;
    } catch (error) {
      console.error('마이크 권한 확인 실패:', error);
      return false;
    }
  };

  // 녹음 시작 함수
  const startRecording = async () => {
    const hasPermission = await requestMicrophoneAccess();
    if (!hasPermission) return;

    setIsRecording(true);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/wav',
        });
        const file = new File([audioBlob], 'recording.wav', {
          type: 'audio/wav',
        });

        setRecordedFile(file);
        handleSTT(file); // 여기서 STT 요청 보내기
      };

      mediaRecorder.start();
      console.log('녹음 시작');
    } catch (error) {
      console.error('녹음 시작 실패:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    setIsRecording(false);
  };

  const getMessageList = async () => {
    try {
      const res = await getMessageListApi();
      setMessages(res.data.reverse());
    } catch (err) {
      console.error('로딩 실패', err);
    }
  };

  // STT 결과 수신 시 새 메시지 추가
  const handleSTT = async (audioFile: File) => {
    try {
      const sttRes = await postSTTApi(audioFile);
      const { text } = sttRes.data;

      const trimmedText = text?.trim() ?? '';

      if (trimmedText === '') {
        console.warn('STT 결과가 비어있음');
        setIsRecording(false);
        return; // text가 없으면 그냥 함수 종료
      }

      const newId = Date.now();
      const newMsg: SentMessageProps = {
        id: newId,
        type: 'sent',
        content: trimmedText,
        isFeedback: false,
      };

      setMessages((prev) => {
        const newMessages = [...(prev ?? []), newMsg];
        setCurrentMessageIndex(0);
        return newMessages;
      });

      setNewMessageId(newId);
      setIsPronounceError(false);

      getFeedback(trimmedText, audioFile);
    } catch (err) {
      console.error('STT 실패', err);
    }
  };

  const getFeedback = async (transcription: string, audioFile: File) => {
    setIsFeedbackLoading(true);
    try {
      const res = await getFeedbackApi(transcription, audioFile);
      const feedbackData = res.data;

      setMessages((prev) =>
        prev?.map((msg) => {
          if (msg.id !== newMessageId) return msg;
          if (msg.type !== 'sent') return msg;

          return {
            ...msg,
            isFeedback: true,
            feedback: feedbackData.feedback,
            modelAudioUrl: feedbackData.modelAudioUrl,
          };
        })
      );

      getChatReply(feedbackData.content);
    } catch (err) {
      console.error('피드백 요청 실패', err);
    } finally {
      setIsFeedbackLoading(true);
    }
  };

  const getChatReply = async (text: string) => {
    setIsReplyLoading(true);

    try {
      const replyRes = await postChatReplyApi(text);
      const replyData = replyRes.data;

      setMessages((prev) => {
        const newMessages = [...(prev ?? []), replyData];
        setCurrentMessageIndex(0); // 항상 맨 위 인덱스
        return newMessages;
      });
    } catch (err) {
      console.error('챗봇 응답 실패', err);
    } finally {
      setIsReplyLoading(false);
    }
  };

  return (
    <Container>
      <TopBar>
        <Icon>
          <Setting color={theme.colors.text.tertiary} />
        </Icon>
      </TopBar>
      <ChatList>
        {messages?.slice().map((msg, index) => {
          const isLast = index === messages.length - 1;
          const scrollRef = isLast ? lastMessageRef : undefined;
          const isNew = isLast && msg.type === 'sent';

          return msg.type === 'received' ? (
            <RcvdMessage key={index} {...msg} />
          ) : (
            <SentMessage
              key={index}
              {...msg}
              ref={scrollRef}
              isLast={isLast}
              isNew={isNew}
              isFeedbackLoading={isFeedbackLoading}
            />
          );
        })}

        {isPronounceError && (
          <SentMessageLayout>
            <TryAgainMessageBox>
              <StyledText
                $variant="bodyMediumLight"
                color={theme.colors.text.tertiary}
              >
                Please improve your pronunciation and say it again!
              </StyledText>
            </TryAgainMessageBox>
          </SentMessageLayout>
        )}

        {isReplyLoading && (
          <RcvdMessageLayout>
            <ReplyLoadingMessageBox>
              <BounceLoader />
            </ReplyLoadingMessageBox>
          </RcvdMessageLayout>
        )}

        <div ref={scrollBottomRef} />
      </ChatList>
      <RecordingControls>
        <CircleButton
          size="big"
          bgColor={theme.colors.brand.primary}
          icon={!isRecording ? <Microphone /> : <Pause />}
          onClick={isRecording ? stopRecording : startRecording}
        />
      </RecordingControls>
      <NavBar />
    </Container>
  );
};

export default TalkBotPage;
