import React from 'react';
import {
  Container,
  DashBoardContainer,
  Title,
  IssueCard,
  IssueHeader,
  IssueTitle,
  IssueScoreBadge,
  SentenceSectionHeader,
  MoreBtn,
  SentenceList,
  SentenceItem,
  EnglishSentence,
} from './styles';
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar/NavBar';
import ArrowRight from '../../components/Icons/ArrowRight';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import theme from '../../styles/theme';
import { dummyCustoms } from './dummyCustoms';

const PersonalizedLessonPage: React.FC = () => {
  return (
    <Container>
      <TopBar name="Personalized Lesson" />
      <DashBoardContainer>
        <Title>Your Pronunciation Summary</Title>
        <StyledText
          $variant="captionMedium"
          color={theme.colors.text.secondary}
        >
          Practice your pronunciation more! We’ve prepared some recommended
          sentences for you.
        </StyledText>
        {dummyCustoms.map((item, index) => (
          <IssueCard key={index}>
            <IssueHeader>
              <IssueTitle
                $variant="bodyLargeBold"
                color={theme.colors.brand.primary}
              >
                {item.title}
              </IssueTitle>
              <IssueScoreBadge>
                <span>{item.accuracy}%</span>
              </IssueScoreBadge>
            </IssueHeader>
            <SentenceList>
              <SentenceSectionHeader>
                <StyledText
                  $variant="captionMedium"
                  color={theme.colors.text.tertiary}
                >
                  Try Saying This
                </StyledText>
                <MoreBtn>
                  <StyledText $variant="captionMedium">more</StyledText>
                  <ArrowRight color="black" width="18" height="18" />
                </MoreBtn>
              </SentenceSectionHeader>
              {item.sentences.map((sentence, idx) => (
                <SentenceItem key={idx} $hasBottomBorder={idx === 0}>
                  <StyledText $variant="headingM">{sentence.korean}</StyledText>
                  <StyledText
                    $variant="captionRegular"
                    color={theme.colors.text.tertiary}
                  >
                    {sentence.translation}
                  </StyledText>
                </SentenceItem>
              ))}
            </SentenceList>
          </IssueCard>
        ))}
      </DashBoardContainer>
      <NavBar />
    </Container>
  );
};

export default PersonalizedLessonPage;
