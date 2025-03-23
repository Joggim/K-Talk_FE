import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, SentenceList } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar';
import SentenceItem from './SentenceItem';
import { SentenceItemDTO } from '../../apis/topics/dto';
import { getSentenceListApi } from '../../apis/topics';

const SentencesPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();

  const location = useLocation();
  const topicName = location.state?.topicName || 'Practice Sentences';
  const [sentences, setSentences] = useState<SentenceItemDTO[]>([]);

  // topicId가 undefined일 경우 대비
  const topicIdNum = topicId ? Number(topicId) : null;

  // 문장 리스트 조회 API
  const getSentenceList = async () => {
    try {
      const response = await getSentenceListApi(Number(topicId));
      if (response.success) {
        setSentences(response.data);
      }
    } catch (error) {
      console.error('Error fetching sentence list:', error);
    }
  };

  useEffect(() => {
    getSentenceList();
  }, []);

  return (
    <Container>
      <TopBar name={topicName} />
      <SentenceList>
        {sentences.map((sentence) => (
          <SentenceItem
            key={sentence.id}
            korean={sentence.korean}
            translation={sentence.translation}
            id={sentence.id}
          />
        ))}
      </SentenceList>
      <NavBar />
    </Container>
  );
};

export default SentencesPage;
