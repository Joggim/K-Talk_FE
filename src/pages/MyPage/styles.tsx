import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  flex-direction: column;
  padding-top: 60px;
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
  padding: 10px;
  gap: 10px;
  z-index: 10;
  background: ${({ theme }) => theme.colors.bg.white};
`;

export const Icon = styled.div`
  object-fit: cover;
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: auto;
  //justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: 20px;
  gap: 10px;
  background: ${({ theme }) => theme.colors.bg.white};
`;

export const NameContainer = styled.div`
  display: flex;
  width: auto;
  //justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  background: ${({ theme }) => theme.colors.bg.white};
`;

export const ProfileImage = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg.black2};
`;
