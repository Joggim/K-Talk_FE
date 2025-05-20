import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-self: stretch;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bg.white};
  gap: 10px;
`;

export const ErrorTypeList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  overflow-x: scroll;

  padding-bottom: 3px; // 스크롤바 공간 확보 (선택)

  /* 스크롤바 전체 영역 */
  &::-webkit-scrollbar {
    height: 3px; // 가로 스크롤바 높이
  }

  /* 스크롤바 핸들 (움직이는 부분) */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[300]}; // 예: 중간 회색
    border-radius: 8px;
  }

  /* 마우스 오버 시 스크롤바 색상 변경 */
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const ErrorTypeItem = styled.div`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 22px;
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.state.errorLight};
`;
