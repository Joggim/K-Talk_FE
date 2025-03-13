import React from 'react';
import {
  Container,
  Title,
  Section,
  Accuracy,
  SentenceBox,
  Sentence,
  EnglishSentence,
  MoreButton,
} from './styles';
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar/NavBar';
import { dummyCustoms } from './dummyCustoms';

const CustomTrainingPage: React.FC = () => {
  return (
    <Container>
      <TopBar name="Personalized Lesson" />

      {dummyCustoms.map((item, index) => (
        <Section key={index}>
          <Accuracy>
            {item.title}: <span>{item.accuracy}%</span>
          </Accuracy>
          {item.sentences.map((sentence, idx) => (
            <SentenceBox key={idx}>
              <Sentence>{sentence.korean}</Sentence>
              <EnglishSentence>{sentence.english}</EnglishSentence>
            </SentenceBox>
          ))}
          <MoreButton>▼ more</MoreButton>
        </Section>
      ))}

      <NavBar />
    </Container>
  );
};

export default CustomTrainingPage;
