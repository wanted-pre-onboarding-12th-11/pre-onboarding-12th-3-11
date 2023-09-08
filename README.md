# 원티드 프리온보딩 프론트엔드 12차 3주차 과제 - 11팀


## 과제 소개
- 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현 + Best Practice 도출
> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다. 
과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요.

## 팀원 소개

> 이름을 클릭하면 개인 github 프로필로 이동합니다.

|  [팀장] [장택진](https://github.com/TaekJinJang)     |  [김영채](https://github.com/0chae01)    |   [박상준](https://github.com/owen970517)            |  [오아름](https://github.com/Aroma-oh)             |[이새미](https://github.com/saemileee)| [홍혜수](https://github.com/hyesuhong)|
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/TaekJinJang" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/0chae01" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/owen970517" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/Aroma-oh" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/saemileee" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/hyesuhong" width="130" height="130"> |

## 목표 설정

#### 💡 Best Practice 도출을 위한 토론 및 소통 경험
- 성능 향상
    - API 호출별 로컬 캐싱으로 불필요한 호출 방지
- UX 고려
    - 로딩 스피너, 키보드 이벤트 활용
- 클린코드 (유지보수 고려)
    - 관심사 분리로 유지보수성 향상


## 개발 기간
2023.09.05-2023.09.07

## 팀 노션
[팀 노션 링크](https://motley-bird-51b.notion.site/3-404e18226e6045d5a67703dccaa4a393?pvs=4) 

## 시작 가이드
* 배포 주소

  🔗 https://pre-onboarding-12th-3-11-seven.vercel.app

* 프로젝트 로컬 실행 방법
    - API 서버 실행 ([저장소 링크](https://github.com/walking-sunset/assignment-api_7th))
    > API 서버가 실행되어야 정상적으로 작동하므로, 필수로 선행되어야 합니다.
    ```
    $ git clone https://github.com/walking-sunset/assignment-api_7th.git
    $ npm install
    $ npm start
    ```
    - 프론트엔드 실행 

    ```
    $ git clone https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11.git
    $ npm install
    $ npm start
    ```

## ⭐️ 과제 구현 방법 ⭐️

### 1. 로컬 캐싱 구현 방법

### 2. 입력별 API 호출 횟수를 줄이는 전략
- 입력값이 아무것도 없으면 요청하지 않습니다.
- 디바운싱을 활용해 500ms이상 타이핑이 멈추면 데이터를 요청하도록 유도하여 불필요한 요청을 줄였습니다.
- 한글의 경우 완전한 음절이 완성되지 않으면(자음/모음만 입력 시) 해당 부분을 필터링하여 요청합니다.
- API 요청 결과는 캐싱하고, 이후 동일한 요청이 들어오면 API 요청 대신 캐싱된 값을 활용합니다.(캐싱데이터 expire time: 12시간)

### 3. 키보드를 이용한 추천 검색어 기능 사용법
- 검색어를 입력했을 때 추천 검색어가 없으면, '추천 검색어가 없습니다'라는 문구가 출력됩니다.
- 추천 검색어가 있는 경우 키보드 위/아래 방향키로 이동 가능하고, 엔터 키를 눌러 검색할 수 있습니다.

## 화면 구성
<div align="center" >
  <img src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/assets/124250465/c8841e8a-f9d4-4b03-b250-2140803da273)" />
</div>

## ✨ Best Practice 도출

### 1. Best Practice를 위해 고민한 내용들 (토론한 내용 결과, 근거)
- [Notion 링크](https://motley-bird-51b.notion.site/Best-Practice-44d333bf327f4ed182c6d7c9b6ed1361?pvs=4) 참고

1. 검색어 추천 기능 구현 방법
  - 결론: **입력값으로 `sickNm`에 포함된 데이터만 요청, 결과 7개만 출력**
  - 근거
    - 기본 쿼리파라미터만 사용해 호출 시 `sickCd`에 포함된 데이터도 리턴됨
    - 클론할 사이트와 동일하게 7개 결과만 출력

2. API 호출별 로컬 캐싱 구현 방법
  - 결론: **추가하기**
  - 근거
    - 추가하기
    - 
   
3. 언제 fresh한 데이터가 필요한가? (expire time)
  - 결론: **12시간이 지나면 만료**
  - 근거
    - 실제 서비스라면 브라우저를 닫을 때 캐싱데이터가 삭제되거나, 길게 설정해도 괜찮을 것 같지만 과제 구현 사항을 위해 비교적 짧게 설정
   
4. 캐싱된 데이터는 어디에 저장하는가?
  - 결론: **추가하기**
  - 근거
    - 추가하기
    - 

5. 입력마다 API 호출하지 않도록 API 호출 횟수 줄이는 전략
  - 결론: **디바운스 활용, 완전한 음절만 필터링해서 호출, 입력값이 없으면 호출 X**
  - 근거
    - 매번 타이핑할 때마다 호출하면 불필요한 요청이 발생함
    - `감ㅁ기` 또는 `질병ㅇ` 처럼 완전하지 않은 자음/모음이 문자열에 있을 때 필터링 후 요청해 UX 개선 가능
    - 입력값이 없는 경우 호출하지 않고, 추천 검색어가 없음을 알리는 문구 출력
    
6. 키보드만으로 추천 검색어들로 이동 가능하도록  구현 방법
  - 결론: **onKeyDown 이벤트의 key값 ArrowDown / ArrowUp 활용**
  - 근거
    - onKeyDown 이벤트의 key값으로 키보드의 어떤 키를 눌렀는지 인식 가능
    - 각 검색어 아이템의 인덱스 값을 활용해 선택 가능

7. Pages 폴더 내 불필요한 컴포넌트 관리
  - 결론: **pages 폴더, Router.tsx 사용X**
  - 근거
    - pages 폴더는 단일페이지 과제이므로 사용X
    - containers 폴더에서 로직 작성 후 App.tsx에 불러오되, `import MainPage from 'containers/SearchContainer';` 처럼 이름을 변경하면서 import 가능
    - 단일페이지 과제이고, 에러페이지 제공이 필수가 아니므로 Router.tsx 사용X


8. 추상화에 대한 고민
  - 결론: **커스텀 훅을 활용해 데이터 캐싱, 패칭 과정 추상화하기**
  - 근거
    - 커스텀 훅을 활용하면 원활한 유지보수를 위해 관심사 분리하고 로직을 추상화할 수 있음.


### 2. 프론트엔드 아키텍쳐

추가하기

### 3. 주요 기능

#### `검색어 추천`
> - 질환명 검색시 API 호출을 통해 검색어 추천 기능을 제공합니다.
> - 추천 검색어가 없을 시 검색어 없음 안내 문구를 출력합니다.

#### `추천 검색어 API 호출별 로컬 캐싱`
> - 입력값이 아무것도 없으면 요청하지 않습니다.
> - 디바운싱을 활용해 500ms이상 타이핑이 멈추면 데이터를 요청하도록 유도하여 불필요한 요청을 줄였습니다.
> - 한글의 경우 완전한 음절이 완성되지 않으면(자음/모음만 입력 시) 해당 부분을 필터링하여 요청합니다.
> - API 요청 결과는 캐싱하고, 이후 동일한 요청이 들어오면 API 요청 대신 캐싱된 값을 활용합니다.
> - 캐싱된 데이터는 12시간이 지나면 만료됩니다.

#### `키보드만으로 추천 검색어 이동`
> - 검색어를 입력했을 때 추천 검색어가 없으면, '추천 검색어가 없습니다'라는 문구가 출력됩니다.
> - 추천 검색어가 있는 경우 onKeyDown 이벤트의 key값 `ArrowUp`/`ArrowDown`을 활용해 키보드 위/아래 방향키로 이동 가능하고, 엔터 키를 눌러 검색할 수 있습니다.

### 4. 트러블 슈팅
- [Notion 링크](https://motley-bird-51b.notion.site/ed4d9639fd4e4d81ae7a688d70eb5bf8?pvs=4) 참고

### 5. 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂hooks
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ```

### 6. 컨벤션

  #### `커밋 컨벤션`
  | 커밋 유형 | 의미 |
  | --- | --- |
  | init | 프로젝트 시작 |
  | feat | 기능 추가 |
  | style | 코드 포맷팅 |
  | refactor | 코드 리팩토링 |
  | chore | 패키지 매니저 및 그 외 기타 수정 ex) .gitignore |
  | rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
  | remove | 파일을 삭제하는 작업만 수행한 경우 |
  | setting | 기본 세팅 변경의 경우 |
  | docs | README.md 수정 등 |
  | design | UI 디자인 |
  | merge | 머지, 충돌해결 등  |
    
  #### `코드 컨벤션`, `formatting, lint 컨벤션`
  - [Notion 링크](https://motley-bird-51b.notion.site/d921faeed6f8452b89bc5e04f0b21c2c?pvs=4) 참고
   

## 기술스택 

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/Axios-DA291C?style=for-the-badge&logo=axios&logoColor=white">  <img src="https://img.shields.io/badge/React Router Dom-3178C6?style=for-the-badge&logo=&logoColor=white">

### Convention

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Environment

<img src="https://img.shields.io/badge/visual Studio code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

 
