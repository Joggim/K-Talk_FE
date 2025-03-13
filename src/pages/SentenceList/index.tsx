import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, SentenceList } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar';
import SentenceItem from './SentenceItem';
import { dummySentences } from './dummySentences';

const SentenceListPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();

  // topicId가 undefined일 경우 대비
  const topicIdNum = topicId ? Number(topicId) : null;

  // `topicIdNum`을 사용해 필터링
  const filteredSentences = dummySentences.filter(
    (sentence) => sentence.topic_id === topicIdNum
  );

  return (
    <Container>
      <TopBar name="Practice Sentences" />
      <SentenceList>
        {filteredSentences.map((sentence, index) => (
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
