import React from 'react';
import { Container, MessageContainer } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar';
import RcvdMessage from './RcvdMessage';
import SentMessage from './SentMessage';
import { dummyMessages } from './dummyMessages';

const TalkPage: React.FC = () => {
  return (
    <Container>
      <TopBar />
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
      </MessageContainer>
      <NavBar />
    </Container>
  );
};

export default TalkPage;
