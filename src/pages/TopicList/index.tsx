import React from 'react';
import { Container, SentenceList } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar';
import MenuItem from '../../components/MenuItem';
import { dummyTopics } from './dummyTopics';
import theme from '../../styles/theme';

const TopicListPage: React.FC = () => {
  return (
    <Container>
      <TopBar name="Practice Sentences" />
      <SentenceList>
        {dummyTopics.map((topic, index) => (
          <MenuItem
            key={topic.id}
            bgColor={theme.colors.brand.primaryLight}
            fontColor={theme.colors.text.primary}
            title={topic.title || ''}
            content={topic.description || ''}
            route={`/sentence-list/${topic.id}`}
          />
        ))}
      </SentenceList>
      <NavBar />
    </Container>
  );
};

export default TopicListPage;
