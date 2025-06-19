# K-Talk Frontend

**K-Talk**은 **외국인 한국어 학습자를 위한 음성 인식 및 AI 기반 발음 교정 및 회화 연습 서비스**입니다. 이 레포지토리는 K-Talk의 프론트엔드 클라이언트 코드를 포함하고 있으며, React 기반으로 구성되어 있습니다.
> 전체 프로젝트 설명은 [K-Talk 프로젝트 소개 레포지토리](https://github.com/Joggim/team-26-joggim)에서 확인하실 수 있습니다.

<br>

## 🔗 배포 링크
👉 [https://k-talkk.vercel.app/](https://k-talkk.vercel.app/)

<br>

## ✨ 주요 기능

- 구글 로그인 기반 사용자 인증
- 학습 주제 및 문장 조회
- 실시간 발음 평가 및 피드백
- 사용자 맞춤 발음 분석 대시보드
- 챗봇 기반 자유 회화 및 문법 교정 기능

<br>

## 🛠️ 기술 스택

| 분류 | 사용 기술                             |
|------|-----------------------------------|
| 언어 | TypeScript                           |
| 프레임워크 | React (CRA 기반)                 |
| 상태관리 | Recoil                             |
| 스타일링 | styled-components + theme.ts        |
| 요청 | Axios, REST API 기반 통신        |
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

## ⚙️ 실행 방법

### 1. 환경 변수 설정 (.env)
.env 파일을 프로젝트 루트에 생성 후, 아래와 같이 설정합니다:
```bash
   VITE_API_BASE_URL=http://localhost:8080 #or https://k-talk-server.com/
   VITE_GOOGLE_CLIENT_ID=[YOUR_GOOGLE_CLIENT_ID]
```
- `VITE_API_BASE_URL` : 백엔드 API 서버 주소. 현재 운영 서버는 곧 종료 예정이므로 로컬에서 localhost:8080으로 실행 권장
- `VITE_GOOGLE_CLIENT_ID` : Google OAuth2 로그인용 Client ID. 반드시 본인의 Google Cloud Console에서 발급한 값을 입력해야 함 
> Google 로그인 기능을 사용하려면:
> 1. Google Cloud Console 접속
> 2. 새로운 OAuth 클라이언트 ID 생성
> 3. 승인된 리디렉션 URI에 http://localhost:3000 추가
> 4. 생성된 Client ID를 .env에 복사

### 2. 의존성 설치
```bash
yarn install
```

### 3. 개발 서버 실행
```bash
yarn dev
```
> 기본 포트는 http://localhost:3000입니다.
백엔드 서버(http://localhost:8080)와 CORS 설정이 되어 있어야 합니다.

<br>

## 📌 페이지 설명

| 페이지 | 설명 |
|--------|------|
| Login | Google OAuth2 기반 로그인 |
| Home | 메인 화면, 문장 연습 및 맞춤 학습 진입 |
| Topics | 학습 주제 목록 조회 및 선택 |
| Sentences | 선택한 주제의 문장 리스트 표시 및 선택 |
| Practice | 문장 녹음 및 발음 피드백 제공 |
| TalkBot | 자유 대화형 챗봇 및 문법 교정 |
| MyPage | 나의 발음 학습 기록 확인 |
| CustomTrainingOverview | 사용자의 주요 발음 오류 유형 요약 및 분석 대시보드 |
| CustomSentences | 발음 오류 유형별 맞춤 문장 추천 |
| ErrorLogs | 사용자가 해당 발음 오류 유형을 실수한 과거 발음 기록 확인 |

<br>

## 테스트 및 실행 설명

| 항목 | 설명                            |
|------|-----------------------------------|
| How to build | yarn build                          |
| How to install | yarn install                 |
| How to test | 현재 테스트 코드 없음 (UI 위주 SPA 프로젝트)      |
| How to run | yarn dev로 로컬 실행        |
