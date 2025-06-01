import React, { useState, useEffect } from 'react';
import {
  Container,
  TopBarContainer,
  Icon,
  ProfileContainer,
  ProfileImage,
  OverviewContainer,
  OverviewItem,
  OverviewTitleText,
  SectionHeader,
} from './styles';
import NavBar from '../../components/NavBar';
import { StyledText } from '../../components/StyledText/styles';
import MoreBtn from '../../components/MoreBtn';
import Setting from '../../components/Icons/Setting';
import HistorySentenceItem from './HistorySentenceItem';
import theme from '../../styles/theme';
import { getUserInfoApi, getUserLearningHistoryApi } from '../../apis/user';
import { UserInfo } from '../../apis/user/dto';
import { LearningHistory } from '../../apis/user/dto';
import { OverviewProps } from './dummyOverview';
import { dummyOverview } from './dummyOverview';

const MyPage: React.FC = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [overiew, setOverview] = useState<OverviewProps>();
  const [practiceHistory, setPracticeHistory] = useState<LearningHistory[]>();

  const getUser = async () => {
    try {
      const response = await getUserInfoApi();
      setUser(response.data);
      setOverview(dummyOverview);
    } catch (error) {
      console.error('사용자 정보를 불러오는 데 실패했습니다:', error);
    }
  };

  const getUserLearningHistory = async () => {
    try {
      const response = await getUserLearningHistoryApi();
      setPracticeHistory(response.data);
    } catch (error) {
      console.error('사용자 학습 이력을 불러오는 데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    getUser();
    getUserLearningHistory();
  }, []);

  const handleMoreBtnClick = () => {
    console.log('click');
  };

  return (
    <Container>
      <TopBarContainer>
        <Icon>
          <Setting color={theme.colors.text.tertiary} />
        </Icon>
      </TopBarContainer>

      {user ? (
        <ProfileContainer>
          <ProfileImage />
          <StyledText $variant="headingL">{user.nickname}</StyledText>
        </ProfileContainer>
      ) : (
        <StyledText $variant="captionRegular">
          사용자 정보를 불러오지 못했습니다.
        </StyledText>
      )}

      {/*<OverviewContainer>
        <OverviewItem>
          <OverviewTitleText $variant="captionMedium">
            Sentences Practiced
          </OverviewTitleText>
          <StyledText $variant="headingL">{overiew?.sentenceCount}</StyledText>
        </OverviewItem>
        <OverviewItem>
          <OverviewTitleText $variant="captionMedium">
            Pronunciation Accuracy
          </OverviewTitleText>
          <StyledText $variant="headingL">{overiew?.accuaracy}%</StyledText>
        </OverviewItem>
        <OverviewItem>
          <OverviewTitleText $variant="captionMedium">
            Days Practiced
          </OverviewTitleText>
          <StyledText $variant="headingL">{overiew?.days}</StyledText>
        </OverviewItem>
      </OverviewContainer>*/}

      <SectionHeader>
        <StyledText $variant="bodyLargeBold">Practice History </StyledText>
        {/*<MoreBtn onClick={() => handleMoreBtnClick()} />*/}
      </SectionHeader>

      {practiceHistory?.map((item) => (
        <HistorySentenceItem key={item.id} {...item} />
      ))}
      <NavBar />
    </Container>
  );
};

export default MyPage;
