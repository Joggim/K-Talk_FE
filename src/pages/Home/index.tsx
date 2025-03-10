import React from 'react';
import { Container, MenuContainer } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import MenuItem from './MenuItem';
import theme from '../../styles/theme';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>K-Talk</h1>
      <MenuContainer>
        <MenuItem
          bgColor={theme.colors.brand.primary}
          fontColor={theme.colors.text.white}
          title="문장 읽기"
          content="정해진 문장을 읽으며 발음 연습하기"
          route="/sentence-list"
        />
        <MenuItem
          bgColor={theme.colors.brand.secondary}
          fontColor={theme.colors.text.white}
          title="회원님을 위한 맞춤 수업"
          content="지난 레슨의 실수를 기반으로 만들었어요"
          route="/sentence-list"
        />
      </MenuContainer>
      <NavBar />
    </Container>
  );
};

export default HomePage;
