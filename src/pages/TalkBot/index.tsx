import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  TopBar,
  Icon,
  ChatList,
  RecordingControls,
  TryAgainMessageBox,
} from './styles';
import { MessageLayout } from './SentMessage/styles';
import NavBar from '../../components/NavBar/NavBar';
import CircleButton from '../../components/CircleButton';
import RcvdMessage from './RcvdMessage';
import SentMessage from './SentMessage';
import Microphone from '../../components/Icons/Microphone';
import Pause from '../../components/Icons/Pause';
import Setting from '../../components/Icons/Setting';
import theme from '../../styles/theme';
import { MessageData } from '../../apis/talkbot/dto';
import { SentMessageProps } from './SentMessage/dto';
import { dummyMessages, dummyNewMessage } from './dummyMessages';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import {
  postSTTApi,
  getFeedbackApi,
  postChatReplyApi,
} from '../../apis/talkbot';

const TalkBotPage: React.FC = () => {
  const firstLoadRef = useRef(true);
  const scrollBottomRef = useRef<HTMLDivElement | null>(null); // 전체 채팅 하단 기준
  const lastMessageRef = useRef<HTMLDivElement | null>(null); // 마지막 메시지용 (피드백 열릴 때)

  const [messages, setMessages] = useState<MessageData[]>(
    dummyMessages.map((m, i) => ({ ...m, id: i }))
  );
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [newMessageId, setNewMessageId] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPronounceError, setIsPronounceError] = useState(false);
  const [pronounceErrorCount, setPronounceErrorCount] = useState(0);

  // 채팅 진입/업데이트 시 하단으로 자동 스크롤
  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({
        behavior: firstLoadRef.current ? 'auto' : 'smooth',
      });
      firstLoadRef.current = false;
    }
  }, [currentMessageIndex]);

  // 녹음 시작 (RcvdMessage가 나오면 자동 시작)
  useEffect(() => {
    if (dummyMessages[currentMessageIndex]?.type === 'received') {
      startRecording();
    }
  }, [currentMessageIndex]);

  // 녹음 시작 함수
  const startRecording = () => {
    setIsRecording(true);
    console.log('녹음 시작');
  };

  // 녹음 종료 및 서버로 전송
  const sendRecording = () => {
    setIsRecording(false);
    // 더미 오디오 입력 처리
    const dummyAudio = 'dummy_base64_audio';
    handleSTT(dummyAudio);
  };

  // STT 결과 수신 시 새 메시지 추가 (애니메이션 테스트용)
  const handleSTT = async (audio: string) => {
    try {
      // const sttRes = await postSTTApi(dummyAudio);
      // const { text, userAudioUrl } = sttRes.data;

      const text = '교수님 말 빠르고 어려워서 이해하기 힘들었다.';
      const userAudioUrl = 'path_to_user_audio_4.mp3';

      const newId = Date.now();
      const newMsg: SentMessageProps = {
        id: newId,
        type: 'sent',
        content: text,
        isFeedback: false,
        userAudioUrl,
      };

      setMessages((prev) => [...prev, newMsg]); // 아래쪽에 추가
      setNewMessageId(newId);
      setCurrentMessageIndex((prev) => prev + 1);
      setIsPronounceError(false);

      // 피드백 요청
      handleFeedback(newId, text);
    } catch (err) {
      console.error('STT 실패', err);
    }
  };

  const handleFeedback = async (messageId: number, text: string) => {
    try {
      // const feedbackRes = await getFeedbackApi(messageId);
      // const feedbackData = feedbackRes.data;

      const feedbackData = {
        grammar: {
          suggestion: '교수님 말이 너무 빨라서 이해하기 힘들었어.',
          explanation:
            '‘말 빠르고 어려워서’ sounds unnatural. A more natural way to say it is "말이 너무 빨라서 이해하기 힘들었어."',
        },
        pronunciation: {
          pronunciationErrors: [{ char: '빠', index: 6 }],
        },
      };

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                isFeedback: true,
                feedback: feedbackData,
                modelAudioUrl: 'path_to_model_audio_4.mp3',
              }
            : msg
        )
      );

      const hasPronounceError =
        feedbackData.pronunciation?.pronunciationErrors.length > 0;

      if (hasPronounceError) {
        if (pronounceErrorCount < 3) {
          setIsPronounceError(true);
          setPronounceErrorCount((prev) => prev + 1);
          return;
        } else {
          setIsPronounceError(false);
          setPronounceErrorCount(0);
          // 챗봇 응답 요청
          handleReply(text);
        }
      }
    } catch (err) {
      console.error('피드백 요청 실패', err);
    }
  };

  const handleReply = async (text: string) => {
    try {
      // const replyRes = await postChatReplyApi(text);
      // const replyData = replyRes.data;

      const replyData: MessageData = {
        id: Date.now(),
        type: 'received',
        korean: '그럴 땐 교수님께 질문해보는 게 좋아요!',
        translation: 'In that case, try asking your professor!',
        modelAudioUrl: 'path_to_model_audio_reply.mp3',
      };

      setMessages((prev) => [...prev, replyData]);
    } catch (err) {
      console.error('챗봇 응답 실패', err);
    }
  };

  const visibleMessages = [...dummyMessages].reverse(); // 최신 메시지가 아래로 오도록

  return (
    <Container>
      <TopBar>
        <Icon>
          <Setting color={theme.colors.text.tertiary} />
        </Icon>
      </TopBar>
      <ChatList>
        {messages.map((msg, index) => {
          const isLast = index === 0;
          const scrollRef = isLast ? lastMessageRef : undefined;
          const isNew = index === 0 && msg.type === 'sent';

          return msg.type === 'received' ? (
            <RcvdMessage key={index} {...msg} />
          ) : (
            <SentMessage
              key={index}
              {...msg}
              ref={scrollRef}
              isLast={isLast}
              isNew={isNew}
            />
          );
        })}
        {isPronounceError && (
          <MessageLayout>
            <TryAgainMessageBox>
              <StyledText
                $variant="bodyMediumLight"
                color={theme.colors.text.tertiary}
              >
                Please improve your pronunciation and say it again!
              </StyledText>
            </TryAgainMessageBox>
          </MessageLayout>
        )}
        <div ref={scrollBottomRef} />
      </ChatList>
      <RecordingControls>
        <CircleButton
          size="big"
          bgColor={theme.colors.brand.primary}
          icon={!isRecording ? <Microphone /> : <Pause />}
          onClick={isRecording ? sendRecording : startRecording}
        />
      </RecordingControls>
      <NavBar />
    </Container>
  );
};

export default TalkBotPage;
