import React, { useState, useEffect } from 'react';
import {
  Container,
  TopBarContainer,
  Icon,
  MessageContainer,
  RecordContainer,
} from './styles';
import NavBar from '../../components/NavBar/NavBar';
import CircleButton from '../../components/CircleButton';
import RcvdMessage from './RcvdMessage';
import SentMessage from './SentMessage';
import MoveUp from '../../components/Icons/MoveUp';
import Setting from '../../components/Icons/Setting';
import theme from '../../styles/theme';
import { dummyMessages } from './dummyMessages';

const TalkBotPage: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // 녹음 시작 (RcvdMessage가 나오면 자동 시작)
  useEffect(() => {
    if (dummyMessages[currentMessageIndex]?.type === 'received') {
      startRecording();
    }
  }, [currentMessageIndex]);

  // 녹음 시작 함수
  const startRecording = () => {
    console.log('녹음 시작');
    setIsRecording(true);
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
      startRecording();
    } else {
      // 다음 메시지로 이동
      setCurrentMessageIndex((prev) =>
        Math.min(prev + 1, dummyMessages.length - 1)
      );
    }
  };

  return (
    <Container>
      <TopBarContainer>
        <Icon>
          <Setting color={theme.colors.text.tertiary} />
        </Icon>
      </TopBarContainer>
      <MessageContainer>
        {dummyMessages.map((msg, index) =>
          msg.type === 'received' ? (
            <RcvdMessage
              key={index}
              korean={msg.korean}
              translation={msg.translation}
            />
          ) : (
            <SentMessage
              key={index}
              content={msg.content ?? ''}
              feedback={msg.feedback}
              correctAudio={msg.correctAudio}
              userAudio={msg.userAudio}
            />
          )
        )}
        <RecordContainer>
          <CircleButton
            size="big"
            bgColor={theme.colors.brand.primary}
            icon={<MoveUp />}
            onClick={stopRecording}
          />
        </RecordContainer>
      </MessageContainer>

      <NavBar />
    </Container>
  );
};

export default TalkBotPage;
