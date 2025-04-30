import React from 'react';
import { useNavigate } from 'react-router-dom';
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
} from './styles';
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar/NavBar';
import ArrowRight from '../../components/Icons/ArrowRight';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import theme from '../../styles/theme';
import { dummyPronunciationIssues } from './dummyCustoms';
import { useSetRecoilState } from 'recoil';
import { sentenceListState } from '../../recoil/atoms/sentenceListAtom';

const CustomTrainingOverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const setSentenceList = useSetRecoilState(sentenceListState);

  const handleMoreBtnClick = (issueId: Number) => {
    const targetGroup = dummyPronunciationIssues.find(
      (group) => group.id === issueId
    );
    if (!targetGroup) return;

    setSentenceList(targetGroup.sentences);

    navigate(`/custom-sentences`, {
      state: {
        issueId: issueId,
      },
    });
  };

  const handleSentenceClick = (sentenceId: Number, issueId: Number) => {
    const targetGroup = dummyPronunciationIssues.find(
      (group) => group.id === issueId
    );
    if (!targetGroup) return;

    setSentenceList(targetGroup.sentences);

    navigate('/practice', {
      state: {
        sentenceId: sentenceId,
        backTo: '/custom-sentences',
      },
    });
  };

  return (
    <Container>
      <TopBar name="Custom Training" />
      <DashBoardContainer>
        <Title>Your Pronunciation Summary</Title>
        <StyledText
          $variant="captionMedium"
          color={theme.colors.text.secondary}
        >
          Practice your pronunciation more! We’ve prepared some recommended
          sentences for you.
        </StyledText>
        {dummyPronunciationIssues.map((item, index) => (
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
                <MoreBtn onClick={() => handleMoreBtnClick(item.id)}>
                  <StyledText $variant="captionMedium">more</StyledText>
                  <ArrowRight color="black" width="18" height="18" />
                </MoreBtn>
              </SentenceSectionHeader>
              {item.sentences.slice(0, 2).map((sentence, idx) => (
                <SentenceItem
                  onClick={() => handleSentenceClick(sentence.id, item.id)}
                  key={idx}
                  $hasBottomBorder={idx === 0}
                >
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

export default CustomTrainingOverviewPage;
