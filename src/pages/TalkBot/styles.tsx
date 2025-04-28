import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg.black3};
`;

export const TopBar = styled.nav`
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

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 46px;
  height: calc(100% - 116px);
  overflow-y: scroll;
  width: 100%;
  gap: 7px;
  padding: 10px;
  align-self: stretch;
  padding-bottom: 110px;
`;

import { SentMessageBox } from './SentMessage/styles';
export const TryAgainMessageBox = styled(SentMessageBox)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text.tertiary};
`;

import { RcvdMessageBox } from './RcvdMessage/styles';
export const ReplyLoadingMessageBox = styled(RcvdMessageBox)`
  width: auto;
  gap: 0;
`;

export const RecordingControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 80px;
  width: 100%;
  gap: 7px;
  padding: 10px;
`;
