import styled from 'styled-components';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import theme from '../../styles/theme';

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
  width: 353px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  background: var(--Bg-White, #fff);
`;

export const InnerCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

interface PassedProps {
  $passed: boolean | null;
}

export const Passed = styled.div<{ $passed: boolean | null }>`
  display: flex;
  width: 60px;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15px;
  background: ${({ $passed, theme }) =>
    $passed === true
      ? theme.colors.state.correct
      : $passed === false
        ? theme.colors.state.error
        : theme.colors.bg.white}; // feedback이 없는 경우 중립 배경
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 14px;
  font-weight: bold;
`;

export const FeedbackText = styled(StyledText)`
  //position: absolute;
  //top: 60px;
  color: ${({ theme }) => theme.colors.state.error};
`;

export const Korean = styled.div`
  //position: absolute;
  //bottom: 150px;
  display: flex;
  width: auto;
  max-width: 90%;
  text-align: center;
  gap: 2px;
  //margin: 60px 0;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const Translation = styled(StyledText)`
  //position: absolute;
  //bottom: 100px;
  display: flex;
  width: auto;
  max-width: 90%;
  text-align: center;
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
  //position: absolute;
  //top: 160px;
`;

export const AudioItemWrapper = styled.div`
  width: 100px; // 버튼 크기를 동일하게 유지하여 레이아웃이 변하지 않도록 설정
  display: flex;
  justify-content: center;
`;

export const AudioItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg.white};

  :nth-child(2) {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
