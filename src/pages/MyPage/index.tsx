import React, { useState, useEffect } from 'react';
import {
  Container,
  TopBarContainer,
  Icon,
  ProfileContainer,
  NameContainer,
  ProfileImage,
} from './styles';
import NavBar from '../../components/NavBar/NavBar';
import Setting from '../../components/Icons/Setting';
import { getUserInfoApi } from '../../apis/user';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import { UserInfo } from '../../apis/user/dto';
import theme from '../../styles/theme';

const MyPage: React.FC = () => {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserInfoApi(); // 사용자 정보 호출
        setUser(response.data); // user 정보 저장
      } catch (error) {
        console.error('사용자 정보를 불러오는 데 실패했습니다:', error);
      }
    };

    fetchUser();
  }, []);

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
          <NameContainer>
            <StyledText $variant="headingL">{user.nickname}</StyledText>
          </NameContainer>
        </ProfileContainer>
      ) : (
        <StyledText $variant="captionRegular">
          사용자 정보를 불러오지 못했습니다.
        </StyledText>
      )}
      <NavBar />
    </Container>
  );
};

export default MyPage;
