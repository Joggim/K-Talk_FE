import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const SentenceList = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  margin-top: 46px;
  padding-bottom: 140px;
  background-color: ${({ theme }) => theme.colors.background.black3};
`;
