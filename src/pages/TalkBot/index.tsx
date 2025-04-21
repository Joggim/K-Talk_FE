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
import { MessageProps } from './dto';
import { SentMessageProps } from './SentMessage/dto';
import { dummyMessages, dummyNewMessage } from './dummyMessages';
import { StyledText } from '../../components/StyledText/StyledText.styles';

const TalkBotPage: React.FC = () => {
  const firstLoadRef = useRef(true);
  const scrollBottomRef = useRef<HTMLDivElement | null>(null); // 전체 채팅 하단 기준
  const lastMessageRef = useRef<HTMLDivElement | null>(null); // 마지막 메시지용 (피드백 열릴 때)

  const [messages, setMessages] = useState<MessageProps[]>(
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

  // STT 결과 수신 시 새 메시지 추가 (애니메이션 테스트용)
  const handleSTTResult = (text: string) => {
    const newId = Date.now();
    const newMsg: SentMessageProps & { id: number } = {
      id: newId,
      type: 'sent',
      content: text,
      isFeedback: false,
    };

    setMessages((prev) => [...prev, newMsg]); // 아래쪽에 추가
    setNewMessageId(newId);
    setCurrentMessageIndex((prev) => prev + 1);
    setIsPronounceError(false);
  };

  // 녹음 종료 및 서버로 전송 (현재는 console.log로 대체)
  const sendRecording = () => {
    setIsRecording(false);
    console.log('녹음 종료, 서버로 전송...');

    const text = '교수님 말 빠르고 어려워서 이해하기 힘들었다.';
    handleSTTResult(text);
  };

  useEffect(() => {
    if (!newMessageId) return;

    const timer = setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessageId ? { ...dummyNewMessage, id: msg.id } : msg
        )
      );
      if (dummyNewMessage.feedback?.pronunciation) {
        if (pronounceErrorCount >= 3) {
          setIsPronounceError(false);
          setPronounceErrorCount(0);
        } else {
          setIsPronounceError(true);
          setPronounceErrorCount((prev) => prev + 1);
        }
      } else {
        setPronounceErrorCount(0);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [newMessageId]);

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
