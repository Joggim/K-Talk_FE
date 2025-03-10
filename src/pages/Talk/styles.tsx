import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg.black3};
`;

export const MessageContainer = styled.div`
  display: flex;
  position: fixed;
  top: 46px;
  height: calc(100% - 120px);
  overflow-y: scroll;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  padding: 10px;
  align-self: stretch;
`;
