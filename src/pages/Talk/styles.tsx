import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg.black3};
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
  background: ${({ theme }) => theme.colors.bg.black3};
`;

export const Icon = styled.div`
  object-fit: cover;
`;

export const MessageContainer = styled.div`
  display: flex;
  position: fixed;
  top: 46px;
  height: calc(100% - 116px);
  overflow-y: scroll;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  padding: 10px;
  align-self: stretch;
`;

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  gap: 7px;
  padding: 10px;
`;
