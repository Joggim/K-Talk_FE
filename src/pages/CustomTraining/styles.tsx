import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  padding: 16px;
  background-color: ${theme.colors.bg.white};
  position: relative;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 20px;
`;

export const Section = styled.div`
  background: ${theme.colors.gray[100]};
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
`;

export const Accuracy = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.brand.primary};
  margin-bottom: 10px;

  span {
    color: ${theme.colors.state.error};
    font-weight: 700;
  }
`;

export const SentenceBox = styled.div`
  padding: 8px;
  background: ${theme.colors.bg.black4};
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const Sentence = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text.primary};
`;

export const EnglishSentence = styled.p`
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  margin-top: 4px;
`;

export const MoreButton = styled.button`
  font-size: 14px;
  color: ${theme.colors.text.tertiary};
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 10px;
`;
