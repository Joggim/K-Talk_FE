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

  const [messages, setMessages] = useState<MessageProps[]>(
    dummyMessages.map((m, i) => ({ ...m, id: i }))
  );
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
    };

    setMessages((prev) => [...prev, newMsg]); // 아래쪽에 추가
    setNewMessageId(newId);
    setCurrentMessageIndex((prev) => prev + 1);
  };

  // 녹음 종료 및 서버로 전송 (현재는 console.log로 대체)
  const sendRecording = () => {
    setIsRecording(false);
    console.log('녹음 종료, 서버로 전송...');

    handleSTTResult('교수님 말 빠르고 어려워서 이해하기 힘들었다.');

    /*
    // 현재 메시지가 `sent`이고 발음 오류가 있는 경우 다시 말하도록 설정
    const lastSentMessage = dummyMessages[currentMessageIndex - 1];
    if (
      lastSentMessage.feedback?.pronunciation
    ) {
      console.log('발음 오류! 다시 말해주세요.');
    }
    */
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
          onClick={isRecording ? sendRecording : startRecording}
        />
      </RecordingControls>
      <NavBar />
    </Container>
  );
};

export default TalkBotPage;
