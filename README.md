## 📁 Frontend 폴더 구조 (`src/` 기준)

```
src/
  ├── Api/        : Axios를 활용한 API 요청 함수들을 모아둔 폴더입니다.
  
  ├── Component/  : 페이지에서 분리한 공통 컴포넌트 및 재사용 가능한 UI 요소들이 위치해 있습니다.
  
  ├── Context/    : 전역 상태 관리에 사용하는 Context 파일이 있으며, 인증(Token) 관련 로직을 처리합니다.
  
  ├── Img/        : 프로젝트에서 사용하는 이미지 파일들을 보관합니다.
  
  ├── Page/       : 실제 화면에 렌더링되는 주요 페이지 컴포넌트들이 위치한 폴더입니다.
  
  ├── Style/      : styled-components로 작성한 스타일 정의 파일들이 있으며, 각 페이지와 연결됩니다.
  
  └── Util/       : 인증 관련 라우팅 설정, 상수 데이터(서비스/지역 코드 등), 유틸 함수들이 들어 있습니다.
```

<br/>

## 📦 패키지 설치 및 실행 방법

```bash
yarn install
yarn start
```

단, `.env` 파일이 있어야 정상적으로 작동합니다.

해당 파일은 보안사항으로 공개되지 않습니다.

<br/>

## 🧱 개발 환경

- **react** `19.0.0`

- **Styled-components** `6.1.13`

- **Firebase** `11.1.0`

- **Kakao Maps SDK** `1.1.27`

- **EmailJS** `3.2.0`  

- **Swiper** `11.2.0`  

- **React Calendar** `5.1.0`  

- **React Date Picker** `7.5.0`