import React from 'react';
import { Container, MenuContainer, LogoImage } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import MenuItem from '../../components/MenuItem';
import theme from '../../styles/theme';
import Logo from '../../assets/logo.png';

const HomePage: React.FC = () => {
  return (
    <Container>
      {/*
      <LogoImage src={Logo} alt="Logo" />
      */}
      <MenuContainer>
        <MenuItem
          bgColor={theme.colors.brand.primary}
          fontColor={theme.colors.text.white}
          title="Practice Sentences"
          content="Read structured sentences and practice pronunciation"
          route="/topics"
        />
        <MenuItem
          bgColor={theme.colors.brand.secondary}
          fontColor={theme.colors.text.white}
          title="Custom Training"
          content="Tailored to your past mistakes for better learning"
          route="/custom-training"
        />
      </MenuContainer>
      <NavBar />
    </Container>
  );
};

export default HomePage;
