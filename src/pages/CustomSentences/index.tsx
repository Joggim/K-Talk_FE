import React, { useEffect } from 'react';
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
import { useRecoilState } from 'recoil';
import { sentenceListState } from '../../recoil/atoms/sentenceListAtom';
import { dummyCustomSentences } from './dummyCustomSentences';

const CustomSentencesPage: React.FC = () => {
  const [sentenceList, setSentenceList] = useRecoilState(sentenceListState);

  // 커스텀 문장 리스트 조회 API
  const getCustomSentenceList = async () => {
    /*
    try {
      const response = await getCustomSentenceListApi(Number(customTrainingId));
      if (response.success) {
        setSentenceList(response.data);
      }
    } catch (error) {
      console.error('Error fetching sentence list:', error);
    }
    */
    setSentenceList(dummyCustomSentences.sentences);
  };

  useEffect(() => {
    getCustomSentenceList();
  }, []);

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

        {sentenceList.map((sentence) => (
          <SentenceItem
            key={sentence.id}
            korean={sentence.korean}
            translation={sentence.translation}
            id={sentence.id}
            backTo="/custom-sentences"
          />
        ))}
      </ContentArea>
    </Container>
  );
};

export default CustomSentencesPage;
