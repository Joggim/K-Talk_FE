import styled from 'styled-components';
import { StyledText } from '../../components/StyledText/StyledText.styles';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  flex-direction: column;
  padding-top: 60px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg.black3};
  gap: 20px;
`;

export const TopBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  gap: 10px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.bg.black3};
`;

export const Icon = styled.div`
  object-fit: cover;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: auto;
  //justify-content: flex-start;
  margin-top: 46px;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  width: auto;
  //justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;

export const ProfileImage = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brand.primaryLight};
  border: 0.5px solid ${({ theme }) => theme.colors.white};
`;

export const OverviewContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
`;

export const OverviewItem = styled.div`
  display: flex;
  width: 90px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const OverviewTitleText = styled(StyledText)`
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
`;
