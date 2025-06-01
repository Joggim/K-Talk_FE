import React, { useState, useEffect } from 'react';
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
  SentenceList,
  SentenceItem,
} from './styles';
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import MoreBtn from '../../components/MoreBtn';
import { StyledText } from '../../components/StyledText/styles';
import theme from '../../styles/theme';
import { useSetRecoilState } from 'recoil';
import { sentenceListState } from '../../recoil/atoms/sentenceListAtom';
import { getPronunciationIssueListApi } from '../../apis/pronunciationIssue';
import { PronunciationIssue } from '../../apis/pronunciationIssue/dto';

const CustomTrainingOverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [pronunciationIssueList, setPronunciationIssueList] = useState<
    PronunciationIssue[]
  >([]);
  const setSentenceList = useSetRecoilState(sentenceListState);

  // 문장 리스트 조회 API
  const getPronunciationIssues = async () => {
    try {
      const response = await getPronunciationIssueListApi();
      if (response.success) {
        setPronunciationIssueList(response.data);
      }
    } catch (error) {
      console.error('Error fetching pronunciation issue:', error);
    }
  };

  useEffect(() => {
    getPronunciationIssues();
  }, []);

  const handleMoreBtnClick = (issueId: Number) => {
    navigate(`/custom-sentences/${issueId}`);
  };

  const handleSentenceClick = (sentenceId: Number, issueId: Number) => {
    const targetGroup = pronunciationIssueList.find(
      (group) => group.id === issueId
    );
    if (!targetGroup) return;

    setSentenceList(targetGroup.sentences);

    navigate('/practice', {
      state: {
        sentenceId: sentenceId,
        backTo: `/custom-sentences/${issueId}`,
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
        {pronunciationIssueList.map((item, index) => (
          <IssueCard key={index}>
            <IssueHeader onClick={() => handleMoreBtnClick(item.id)}>
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
                <MoreBtn onClick={() => handleMoreBtnClick(item.id)} />
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
