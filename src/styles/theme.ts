import { DefaultTheme, css } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    // Brand Colors
    brand: {
      primary: '#5249DC',
      secondary: '#2EC4B6',
    },

    gray: {
      50: '#FAFAFA', // 가장 밝은 Gray
      100: '#F8F8F8',
      200: '#E9E9E9',
      300: '#C4C4C4',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#7B7B7B',
      700: '#616161',
      800: '#434343',
      900: '#222222', // 가장 어두운 Gray
    },

    black: '#000000',
    white: '#FFFFFF',

    // Functional Colors
    text: {
      primary: '#000000', // Black
      secondary: '#434343', // Gray-800
      tertiary: '#7B7B7B', // Gray-600
      caption: '#9E9E9E', // Gray-500
      contrast: '#FFFFFF', // White
      white: '#FFFFFF', // White
    },

    state: {
      success: '#27AE60',
      warning: '#E2B93B',
      error: '#EB5757',
    },

    bg: {
      black: '#000000',
      black2: '#E0E0EB',
      black3: '#F1F1F5',
      black4: '#F7F7F8',
      white: '#FFFFFF',
    },

    border: {
      divider: '#E9E9E9', // Gray-200
    },
  },
  elevation: {
    sm: '0px 1px 3px rgba(255, 255, 255, 0.12)', // 작은 그림자
    md: '0px 4px 6px rgba(255, 255, 255, 0.16)', // 중간 그림자
    lg: '0px 10px 15px rgba(255, 255, 255, 0.24)', // 큰 그림자
  },
  fontStyles: {
    // 26px 폰트 (주로 큰 제목)
    headingXL: css`
      font-family: 'Pretendard Variable';
      font-size: 26px;
      font-weight: 700; /* Bold */
      line-height: 1.5;
      letter-spacing: -0.02rem;
    `,
    headingXLMedium: css`
      font-family: 'Pretendard Variable';
      font-size: 26px;
      font-weight: 600; /* Semi-bold */
      line-height: 1.5;
      letter-spacing: -0.02rem;
    `,

    // 22px 폰트 (중간 제목)
    headingL: css`
      font-family: 'Pretendard Variable';
      font-size: 22px;
      font-weight: 700; /* Bold */
      line-height: 1.5;
      letter-spacing: -0.015rem;
    `,
    headingLMedium: css`
      font-family: 'Pretendard Variable';
      font-size: 22px;
      font-weight: 600; /* Semi-bold */
      line-height: 1.5;
      letter-spacing: -0.015rem;
    `,

    // 20px 폰트 (작은 제목)
    headingM: css`
      font-family: 'Pretendard Variable';
      font-size: 20px;
      font-weight: 700; /* Bold */
      line-height: 1.5;
      letter-spacing: -0.01rem;
    `,
    headingMMedium: css`
      font-family: 'Pretendard Variable';
      font-size: 20px;
      font-weight: 600; /* Semi-bold */
      line-height: 1.5;
      letter-spacing: -0.01rem;
    `,

    // 18px 폰트 (본문 강조)
    bodyLargeBold: css`
      font-family: 'Pretendard Variable';
      font-size: 18px;
      font-weight: 700; /* Bold */
      line-height: 1.5;
      letter-spacing: -0.01rem;
    `,
    bodyLargeMedium: css`
      font-family: 'Pretendard Variable';
      font-size: 18px;
      font-weight: 600; /* Semi-bold */
      line-height: 1.5;
      letter-spacing: -0.01rem;
    `,
    bodyLargeRegular: css`
      font-family: 'Pretendard Variable';
      font-size: 18px;
      font-weight: 500; /* Medium */
      line-height: 1.5;
      letter-spacing: -0.01rem;
    `,
    bodyLargeLight: css`
      font-family: 'Pretendard Variable';
      font-size: 18px;
      font-weight: 400; /* Regular */
      line-height: 1.5;
      letter-spacing: -0.01rem;
    `,

    // 16px 폰트 (일반 본문)
    bodyMediumBold: css`
      font-family: 'Pretendard Variable';
      font-size: 16px;
      font-weight: 700; /* Bold */
      line-height: 1.5;
      letter-spacing: -0.005rem;
    `,
    bodyMediumMedium: css`
      font-family: 'Pretendard Variable';
      font-size: 16px;
      font-weight: 600; /* Semi-bold */
      line-height: 1.5;
      letter-spacing: -0.005rem;
    `,
    bodyMediumRegular: css`
      font-family: 'Pretendard Variable';
      font-size: 16px;
      font-weight: 500; /* Medium */
      line-height: 1.5;
      letter-spacing: -0.005rem;
    `,
    bodyMediumLight: css`
      font-family: 'Pretendard Variable';
      font-size: 16px;
      font-weight: 400; /* Regular */
      line-height: 1.5;
      letter-spacing: -0.005rem;
    `,

    // 14px 폰트 (캡션 및 부가 텍스트)
    captionBold: css`
      font-family: 'Pretendard Variable';
      font-size: 14px;
      font-weight: 700; /* Bold */
      line-height: 1.4;
      letter-spacing: -0.0025rem;
    `,
    captionMedium: css`
      font-family: 'Pretendard Variable';
      font-size: 14px;
      font-weight: 600; /* Semi-bold */
      line-height: 1.4;
      letter-spacing: -0.0025rem;
    `,
    captionRegular: css`
      font-family: 'Pretendard Variable';
      font-size: 14px;
      font-weight: 500; /* Medium */
      line-height: 1.4;
      letter-spacing: -0.0025rem;
    `,
    captionLight: css`
      font-family: 'Pretendard Variable';
      font-size: 14px;
      font-weight: 400; /* Regular */
      line-height: 1.4;
      letter-spacing: -0.0025rem;
    `,
  },
};

export default theme;
