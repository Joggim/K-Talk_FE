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
          title="Practice Sentences"
          content="Read structured sentences and practice pronunciation"
          route="/sentence-list"
        />
        <MenuItem
          bgColor={theme.colors.brand.secondary}
          fontColor={theme.colors.text.white}
          title="Personalized Lesson"
          content="Tailored to your past mistakes for better learning"
          route="/custom-training"
        />
      </MenuContainer>
      <NavBar />
    </Container>
  );
};

export default HomePage;
