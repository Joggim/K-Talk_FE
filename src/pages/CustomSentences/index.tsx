import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  ContentArea,
  HeaderSection,
  IssueTitle,
  IssueScoreBadge,
  ErrorLogSummaryCard,
  LeftWrapper,
  RightWrapper,
  ErrorCountBadge,
} from './styles';
import TopBar from '../../components/TopBar';
import SentenceItem from '../../components/SentenceItem';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import theme from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { sentenceListState } from '../../recoil/atoms/sentenceListAtom';
import { getPronunciationIssueDetailApi } from '../../apis/pronunciation';
import { PronunciationIssueDetail } from '../../apis/pronunciation/dto';
import Info from '../../components/Icons/Info';
import ArrowRight from '../../components/Icons/ArrowRight';

const CustomSentencesPage: React.FC = () => {
  const { issueId } = useParams<{ issueId: string }>();
  const [issueDetail, setIssueDetail] =
    useState<PronunciationIssueDetail | null>(null);
  const [sentenceList, setSentenceList] = useRecoilState(sentenceListState);
  const navigate = useNavigate();

  // 커스텀 문장 리스트 조회 API
  const getPronunciationIssueDetail = async () => {
    if (!issueId) return;
    try {
      const response = await getPronunciationIssueDetailApi(Number(issueId));
      if (response.success) {
        setIssueDetail(response.data);
        setSentenceList(response.data.recommendedSentences);
      }
    } catch (error) {
      console.error('Error fetching sentence list:', error);
    }
  };

  useEffect(() => {
    getPronunciationIssueDetail();
  }, []);

  const handleWrongButtonClick = () => {
    navigate(`/custom-sentences/${issueId}/error-logs`);
  };

  return (
    <Container>
      <TopBar />
      <ContentArea>
        <HeaderSection>
          <IssueTitle
            $variant="bodyLargeBold"
            color={theme.colors.brand.primary}
          >
            {issueDetail?.title}
          </IssueTitle>
          <IssueScoreBadge>
            <span>{issueDetail?.accuracy ?? 0}%</span>
          </IssueScoreBadge>
        </HeaderSection>

        <ErrorLogSummaryCard onClick={handleWrongButtonClick}>
          <LeftWrapper>
            <Info />
            <StyledText
              $variant="captionRegular"
              color={theme.colors.text.secondary}
            >
              Where did I pronounce wrong?
            </StyledText>
          </LeftWrapper>
          <RightWrapper>
            <ErrorCountBadge>
              <StyledText
                $variant="captionRegular"
                color={theme.colors.brand.primary}
              >
                {issueDetail?.totalErrorLogCount ?? 0}
              </StyledText>
            </ErrorCountBadge>
            <ArrowRight color="#D1D1D1" />
          </RightWrapper>
        </ErrorLogSummaryCard>

        <StyledText $variant="captionMedium" color={theme.colors.text.tertiary}>
          Try Saying This
        </StyledText>

        {sentenceList?.map((sentence) => (
          <SentenceItem
            key={sentence.id}
            korean={sentence.korean}
            translation={sentence.translation}
            id={sentence.id}
            isPassed={sentence.isPassed ?? null}
            backTo={`/custom-sentences/${issueId}`}
          />
        ))}
      </ContentArea>
    </Container>
  );
};

export default CustomSentencesPage;
