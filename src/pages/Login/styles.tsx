import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 20px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 30px;
`;
export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 8px;
  width: 100%;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.bg.white};
  color: ${({ theme }) => theme.colors.text.primary};

  span {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
`;
