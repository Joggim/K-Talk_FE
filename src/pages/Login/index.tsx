import React from 'react';
import { Container } from './styles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleLogin } from '../../apis/auth';
import { GoogleLogin } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const LoginPage: React.FC = () => {
  console.log(GOOGLE_CLIENT_ID);
  if (!GOOGLE_CLIENT_ID) {
    console.error('Google Client ID is missing!');
    return null;
  }

  const handleGoogleLogin = async (credentialResponse: any) => {
    try {
      console.log('Google login success:', credentialResponse);
      const token = credentialResponse.credential;
      console.log('Token:', token);

      const response = await googleLogin({ token });
      console.log('서버 응답:', response);
      alert(`Login successful! Access Token: ${response.data.accessToken}`);
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Container>
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => alert('Google login failed!')}
        />
      </Container>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
