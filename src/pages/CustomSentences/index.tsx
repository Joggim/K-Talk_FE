import React from 'react';
import {
  Container,
  ContentArea,
  HeaderSection,
  IssueTitle,
  IssueScoreBadge,
} from './styles';
import TopBar from '../../components/TopBar';
import SentenceItem from '../../components/SentenceItem';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import theme from '../../styles/theme';
import { dummyCustomSentences } from './dummyCustomSentences';

const CustomSentencesPage: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <ContentArea>
        <HeaderSection>
          <IssueTitle
            $variant="bodyLargeBold"
            color={theme.colors.brand.primary}
          >
            {dummyCustomSentences.title}
          </IssueTitle>
          <IssueScoreBadge>
            <span>{dummyCustomSentences.accuracy}%</span>
          </IssueScoreBadge>
        </HeaderSection>

        <StyledText $variant="captionMedium" color={theme.colors.text.tertiary}>
          Try Saying This
        </StyledText>

        {dummyCustomSentences.sentences.map((sentence) => (
          <SentenceItem
            key={sentence.id}
            korean={sentence.korean}
            translation={sentence.translation}
            id={sentence.id}
          />
        ))}
      </ContentArea>
    </Container>
  );
};

export default CustomSentencesPage;
