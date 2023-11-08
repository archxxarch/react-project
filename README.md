# react를 이용한 포트폴리오 사이트 만들기
1. 컴포넌트: React 애플리케이션은 여러 개의 재사용 가능한 컴포넌트로 구성됩니다. 각 컴포넌트는 UI 일부분을 나타내며, 개별적으로 독립적으로 개발, 테스트 및 유지 관리할 수 있습니다.   
   
2. JSX: React는 JavaScript의 확장인 JSX(JavaScript XML)를 사용하여 컴포넌트의 UI를 정의합니다. JSX는 HTML과 유사한 문법으로 UI 요소를 선언하고, React 엘리먼트로 컴파일됩니다.   
   
3. 가상 돔 (Virtual DOM): React는 가상 돔(Virtual DOM)을 사용하여 성능을 최적화합니다. 실제 DOM 업데이트가 비용이 크기 때문에 React는 가상 돔을 사용하여 실제 DOM과 비교하고 필요한 변경사항만 업데이트합니다.   
   
## 작업 순서
1. 리액트 설치
2. git 에 업로드
3. [lenis 사이트] (https://github.com/studio-freight/lenis)

## 설치
1. react 설치 `npx create-react-app 프로젝트 이름`
2. GSAP 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`
6. firebase 설치 `npm install -g firebase-tools`

## 트러블 슈팅
<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면, 윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지는데
Git이 이 둘 중 어느 쪽을 선택할지 혼란이 온 것이다 !

해결방법   
`git config --global core.autocrlf true`  // 시스템 전체에 적용   
`git config core.autocrlf true` // 해당 프로젝트에만 적용    
</details>

### GSAP
GSAP은 GreenSock Animation Platform의 약자로, 웹 애니메이션을 만들기 위한 강력한 JavaScript 라이브러리입니다. 
   
GSAP은 웹 개발자들이 웹 페이지나 웹 앱에서 다양한 애니메이션 효과를 구현하는 데 도움을 주는 간편하고 강력한 도구로 널리 사용됩니다.   
   
### lenis
lenis.js는 javascript로 작성된 오픈 소스 웹 프레임워크입니다. 이 프레임워크는 웹 애플리케이션 및 API를 개발하기 위해 사용합니다. lenis.js는 경량화되고 빠른 속도로 동작하며, 간단한 분업과 구조를 제공하여 개발자가 쉽게 웹 애플리케이션 구축할 수 있도록 도와줍니다.
   
### firebase
Firebase는 Google에서 제공하는 클라우드 기반 백엔드 서비스와 개발 플랫폼입니다. Firebase는 모바일 앱 및 웹 앱 개발자들이 앱을 더 빠르고 쉽게 개발, 배포 및 확장할 수 있도록 다양한 도구와 서비스를 제공합니다.
