import styled from 'styled-components';
import { StyledText } from '../../components/StyledText/StyledText.styles';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.bg.black3};
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 360px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bg.white};
  position: relative;
`;

export const Korean = styled(StyledText)`
  display: flex;
  width: auto;
  margin: 60px 0;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const Translation = styled(StyledText)`
  display: flex;
  width: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const Feedback = styled(StyledText)`
  position: absolute;
  top: 140px;
  display: flex;
  width: auto;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const AudioContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: absolute;
  top: 160px;
`;

export const AudioItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
