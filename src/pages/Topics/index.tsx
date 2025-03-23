import React, { useState, useEffect } from 'react';
import { Container, SentenceList } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar';
import MenuItem from '../../components/MenuItem';
import theme from '../../styles/theme';
import { getTopicListApi } from '../../apis/topics';
import type { TopicItem } from '../../apis/topics/dto';

const TopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<TopicItem[]>([]);

  // 주제 리스트 조회 API
  const getTopicList = async () => {
    try {
      const response = await getTopicListApi();
      if (response.success) {
        setTopics(response.data);
      }
    } catch (error) {
      console.error('Error fetching topic list:', error);
    }
  };

  useEffect(() => {
    getTopicList();
  }, []);

  useEffect(() => {
    console.log('topics updated:', topics);
  }, [topics]);

  return (
    <Container>
      <TopBar name="Practice Sentences" />
      <SentenceList>
        {topics.map((topic) => (
          <MenuItem
            key={topic.id}
            bgColor={theme.colors.brand.primaryLight}
            fontColor={theme.colors.text.primary}
            title={topic.title || ''}
            content={topic.description || ''}
            route={`/topics/${topic.id}/sentences`}
          />
        ))}
      </SentenceList>
      <NavBar />
    </Container>
  );
};

export default TopicsPage;
