# K-Talk Frontend

**K-Talk**은 **외국인 한국어 학습자를 위한 음성 인식 및 AI 기반 발음 교정 및 회화 연습 서비스**입니다. 이 레포지토리는 K-Talk의 프론트엔드 클라이언트 코드를 포함하고 있으며, React 기반으로 구성되어 있습니다.
> 전체 프로젝트 설명은 [K-Talk 프로젝트 소개 레포지토리](https://github.com/Joggim/team-26-joggim)에서 확인하실 수 있습니다.

<br>

## 📌 주요 기능

- 구글 로그인 기반 사용자 인증
- 학습 주제 탐색 및 문장 연습
- 실시간 발음 평가 및 피드백
- 사용자 맞춤 발음 분석 대시보드
- 챗봇 기반 자유 회화 및 교정 기능

<br>

## 🛠️ 기술 스택

| 분류 | 사용 기술                             |
|------|-----------------------------------|
| 언어 | TypeScript                           |
| 프레임워크 | React (CRA 기반)                 |
| 상태관리 | Recoil                             |
| 스타일링 | styled-components + theme.ts        |
| 요청 | Axios, RESR API 기반 통신        |
| 음성 기능 | Web Audio API (녹음), HTML5 Audio (재생)    |
| 기타 | react-router-dom, react-icons 등       |

<br>

## 📁 프로젝트 구조

```
src/
├── apis/                     # API 함수 정의
├── assets/                   # 이미지, 아이콘 등 정적 파일
├── components/               # 공통 컴포넌트
├── pages/                    # 주요 페이지 컴포넌트
│   ├── Home/
│   ├── Login/
│   ├── Practice/
│   ├── MyPage/
│   ├── TalkBot/
│   ├── CustomSentences/
│   ├── CustomTrainingOverview/
│   ├── Topics/
│   ├── Sentences/
│   └── ErrorLogs/
├── recoil/                   # 상태 관리
│   └── atoms/
├── styles/                   # 공통 스타일 (fonts, theme.ts, GlobalStyle 등)
├── App.tsx                   # 라우팅 설정
├── App.css
```

<br>

## ⚙️ 실행 방법 (로컬 개발 서버)

### 1. 의존성 설치
```bash
yarn install
```

### 2. 개발 서버 실행
```bash
yarn dev
```
> 기본 포트는 http://localhost:3000입니다.
백엔드 서버(http://localhost:8080)와 CORS 설정이 되어 있어야 합니다.

<br>
## 테스트 및 실행 설명
| 항목 | 설명                            |
|------|-----------------------------------|
| How to build | yarn build                          |
| How to install | yarn install                 |
| How to test | 현재 테스트 코드 없음 (UI 위주 SPA 프로젝트)      |
| How to run | yarn dev로 로컬 실행        |

<br>

## 🔌 주요 Page


## 샘플 데이터 / 데이터 설명
- 사용자가 처음 학습 시작 시, 백엔드에서 미리 준비된 문장 및 학습 주제 데이터를 받아옵니다.
- 서버에서 제공하는 발음 평가 결과와 오류 유형 리스트를 기반으로 피드백 및 히스토리 뷰가 구성됩니다.

## 기타 
- 백엔드와 AI 서버가 필요합니다.
  -.env 설정은 VITE_API_BASE_URL 등을 통해 백엔드 주소를 설정해야 합니다.
  - 예시: VITE_API_BASE_URL=https://k-talk-server.com
-.env 예시:
```bash
VITE_API_BASE_URL=https://k-talk-server.com
```
