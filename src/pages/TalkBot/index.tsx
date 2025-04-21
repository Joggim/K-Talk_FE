import React, { useState, useEffect, useRef } from 'react';
import { Container, TopBar, Icon, ChatList, RecordingControls } from './styles';
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
import { dummyMessages } from './dummyMessages';

const TalkBotPage: React.FC = () => {
  const firstLoadRef = useRef(true);
  const scrollBottomRef = useRef<HTMLDivElement | null>(null); // 전체 채팅 하단 기준
  const lastMessageRef = useRef<HTMLDivElement | null>(null); // 마지막 메시지용 (피드백 열릴 때)

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [newMessageId, setNewMessageId] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  // 채팅 진입/업데이트 시 하단으로 자동 스크롤
  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({
        behavior: firstLoadRef.current ? 'auto' : 'smooth',
      });
      firstLoadRef.current = false;
    }
  }, [currentMessageIndex]);

  // STT 결과 수신 시 호출되는 함수 예시
  const handleSTTResult = (text: string) => {
    const newMsg: SentMessageProps = {
      type: 'sent',
      content: text,
    };
    setMessages((prev) => [newMsg, ...prev]); // reverse 구조이므로 앞에 추가
    setNewMessageId(Date.now()); // 새 메시지 식별용 (애니메이션용)
  };

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

  // 녹음 종료 및 서버로 전송 (현재는 console.log로 대체)
  const stopRecording = () => {
    console.log('녹음 종료, 서버로 전송...');
    setIsRecording(false);

    // 현재 메시지가 `sent`이고 발음 오류가 있는 경우 다시 말하도록 설정
    const lastSentMessage = dummyMessages[currentMessageIndex - 1];
    if (
      lastSentMessage?.type === 'sent' &&
      lastSentMessage.feedback?.pronunciation
    ) {
      console.log('발음 오류! 다시 말해주세요.');
    } else {
      // 다음 메시지로 이동
      setCurrentMessageIndex((prev) =>
        Math.min(prev + 1, dummyMessages.length - 1)
      );
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
        {visibleMessages.map((msg, index) => {
          const isLast = index === 0;
          const scrollRef = isLast ? lastMessageRef : undefined;
          const isNew = index === 0 && msg.type === 'sent';

          return msg.type === 'received' ? (
            <RcvdMessage
              type="received"
              key={index}
              korean={msg.korean}
              translation={msg.translation}
            />
          ) : (
            <SentMessage
              type="sent"
              key={index}
              content={msg.content ?? ''}
              feedback={msg.feedback}
              modelAudioUrl={msg.modelAudioUrl}
              userAudioUrl={msg.userAudioUrl}
              ref={scrollRef}
              isLast={isLast}
              isNew={isNew}
            />
          );
        })}
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
