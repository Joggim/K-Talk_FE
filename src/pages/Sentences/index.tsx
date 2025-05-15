import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, SentenceList } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar';
import SentenceItem from '../../components/SentenceItem';
import { getSentenceListApi } from '../../apis/topics';
import { useRecoilState } from 'recoil';
import { sentenceListState } from '../../recoil/atoms/sentenceListAtom';

const SentencesPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();

  const location = useLocation();
  const topicName = location.state?.topicName || 'Practice Sentences';

  const [sentenceList, setSentenceList] = useRecoilState(sentenceListState);

  // topicId가 undefined일 경우 대비
  const topicIdNum = topicId ? Number(topicId) : null;

  // 문장 리스트 조회 API
  const getSentenceList = async () => {
    try {
      const response = await getSentenceListApi(Number(topicId));
      if (response.success) {
        setSentenceList(response.data);
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
        {sentenceList.map((sentence) => (
          <SentenceItem
            key={sentence.id}
            korean={sentence.korean}
            translation={sentence.translation}
            id={sentence.id}
            isPassed={sentence.isPassed ?? null}
            backTo={`/topics/${topicId}/sentences`}
          />
        ))}
      </SentenceList>
      <NavBar />
    </Container>
  );
};

export default SentencesPage;
