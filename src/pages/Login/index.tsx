import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, LoginContainer } from './styles';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../../apis/auth';
import Logo from '../../assets/logo.png';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  if (!GOOGLE_CLIENT_ID) {
    console.error('Google Client ID is missing!');
    return null;
  }

  const handleGoogleLogin = async (credentialResponse: any) => {
    try {
      console.log('Google login success:', credentialResponse);
      const token = credentialResponse.credential; // ✅ ID Token
      const response = await googleLogin({ token }); // ✅ 서버로 전송
      console.log('서버 응답:', response);
      navigate('/');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Container>
        <img src={Logo} alt="Logo" />
        <LoginContainer>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => alert('Google login failed!')}
            width="330" // 필요시 추가
            size="large" // 필요시 추가
          />
        </LoginContainer>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
