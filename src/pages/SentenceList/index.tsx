import React from 'react';
import { Container, SentenceList } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar';
import SentenceItem from './SentenceItem';
import { dummySentences } from './dummySentences';

const SentenceListPage: React.FC = () => {
  return (
    <Container>
      <TopBar name="문장 읽기" />
      <SentenceList>
        {dummySentences.map((sentence, index) => (
          <SentenceItem
            key={index}
            korean={sentence.korean}
            translation={sentence.translation}
            index={index}
          />
        ))}
      </SentenceList>
      <NavBar />
    </Container>
  );
};

export default SentenceListPage;
