# 원티드 프리온보딩 프론트엔드 12차 3주차 과제 - 11팀

## 📖 목차

- [과제 소개](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%EA%B3%BC%EC%A0%9C-%EC%86%8C%EA%B0%9C)
- [팀원 소개](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%ED%8C%80%EC%9B%90-%EC%86%8C%EA%B0%9C)
- [목표 설정](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%EB%AA%A9%ED%91%9C-%EC%84%A4%EC%A0%95)
- [개발 기간](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%EA%B0%9C%EB%B0%9C-%EA%B8%B0%EA%B0%84)
- [팀 노션](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%ED%8C%80-%EB%85%B8%EC%85%98)
- [시작 가이드](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%EC%8B%9C%EC%9E%91-%EA%B0%80%EC%9D%B4%EB%93%9C)
- [⭐️ 과제 구현 방법 ⭐️](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%EF%B8%8F-%EA%B3%BC%EC%A0%9C-%EA%B5%AC%ED%98%84-%EB%B0%A9%EB%B2%95-%EF%B8%8F)
    1. 로컬 캐싱 구현 방법
    2. 입력별 API 호출 횟수를 줄이는 전략
    3. 키보드를 이용한 추천 검색어 기능 사용법
- [화면 구성](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%ED%99%94%EB%A9%B4-%EA%B5%AC%EC%84%B1)
- [✨ Best Practice 도출](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#-best-practice-%EB%8F%84%EC%B6%9C)
    - Best Practice를 위해 고민한 내용들 (토론한 내용 결과, 근거)
    - 프론트엔드 아키텍쳐
    - 주요 기능
    - 트러블 슈팅
    - 디렉토리 구조
    - 컨벤션
- [기술스택](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11#%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D)

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
- 추상화/모듈화
    - 리듀서로 패칭 후 상태 업데이트 로직 관리
    - 캐싱 로직 클래스로 관리
    - 복잡한 조건문 함수로 추상화
    - 복잡한 ui 상태 조작 로직 커스텀훅 사용

## 개발 기간
2023.09.05-2023.09.07

## 팀 노션
[팀 노션 링크](https://motley-bird-51b.notion.site/3-404e18226e6045d5a67703dccaa4a393?pvs=4) 

## 시작 가이드
* 배포 주소

  🔗 https://pre-onboarding-12th-3-11-seven.vercel.app

* 프로젝트 로컬 실행 방법

    ```
    $ git clone https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11.git
    $ npm install
    $ npm start
    ```

## ⭐️ 과제 구현 방법 ⭐️

### 1. 로컬 캐싱 구현 방법
- **로컬 캐싱을 구현 목표** - 로컬캐싱을 활용하여 `API 호출 횟수`를 줄인다.

<br/>

- **API 호출 횟수 줄이는 방법**
  - 사용자가 입력한 검색어 값을 `key`로 활용, 받아 온 데이터를 `value`의 형태로 저장한 후 동일한 값이 입력 되었을 때 해당 key 값으로 데이터를 찾아 클라이언트 데이터 상태를 업데이트합니다.
  - 사용자가 입력한 검색어 문자열이 `이미 캐싱 된 key + “…”` 형태라면 캐싱 된 key의 `데이터를 가공/필터링`하여 `재캐싱`하고 상태를 업데이트 합니다.
    - [예시]
        1. 사용자 입력 값 (`key`) : `“감”`, 캐싱 된 값(`value`) : `[”감염”, “감염성”, “감시”]`
        2. 사용자 입력 값 (`key`)  : `“감염”` ⇒ key `“감”`의 value를 필터링한 값인 `[”감염”, “감염성”]`를 `“감시”`: `[”감염”, “감염성”]`으로 재 캐싱합니다.
    - 해당 탐색을 효율적으로 하기 위하여 `Trie` 자료구조를 활용해 캐싱하고 데이터를 찾습니다.
      <img width="500" alt="Trie 자료 구조" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/assets/68241138/6ded9d7d-63b7-49c3-924b-fa6f01067d23"/>

  - 브라우저 캐싱을 활용하여 같은 브라우저를 사용한다면 재접속 할 경우 캐시 데이터 기반으로 데이터를 불러올 수 있도록 합니다.
  - 영문 입력 시 `소문자로 변환`하여 key 값을 찾고, 추가/비교 하여 대소문자 구분 없이 캐시 된 값을 활용할 수 있습니다.
    <details>
      <summary><b>👈코드 보기</b></summary>
        <div markdown="1">
            <ul>
    https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/blob/fca886da3c84a7fb7575d44df6a96b4b5b0ab1a4/src/utils/searchTrieCache.ts#L117-L187
            </ul>
        </div>
    </details>

<br/>      
 
- **저장소의 메모리를 효율적으로 사용하기 위해 고려한 방법**
    - 시간 복잡도 측면에서 강점이 있으나 `메모리 부분에 취약한 Trie 자료구조`를 사용하고, 캐시가 오래 유지되지만 `용량 제한이 있는 로컬 스토리지`를 사용하기 때문에 어떻게 메모리를 효율적으로 관리할지 고민이 필요했습니다.
        - 가비지 컬렉팅 - Trie 자료구조에 새로운 데이터를 추가 할 경우 expireTime과 createdAt 속성을 추가하고, 객체의 루트 부터 인서트 되기 전 노드 까지 `순회 할 때 expireTime`을 확인하여 만료 된 캐시 데이터는 `null` 처리합니다.
        - `감염성`까지 검색하여 api를 호출하고 인서트할 때 기존 저장된 `감` 데이터의 expireTime을 초과하여 캐시 만료를 확인할 수 있습니다.
        - <img width="500" alt="스토리지 초기화" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/assets/68241138/d3c97bb5-779c-41d9-99e7-af3e5d50d0bf"/>
        - 로컬스토리지의 용량이 초과 되어 에러를 발생시킬 때 스토리지  `openCacheStorage` 커스텀 모듈을 사용하여 해당 `스토리지를 초기화` 합니다.
    <details>
        <summary><b>👈코드 보기</b></summary>
        <div markdown="1">
            <ul>
              https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/blob/fca886da3c84a7fb7575d44df6a96b4b5b0ab1a4/src/utils/searchTrieCache.ts#L89-L93
            </ul>
        </div>
    </details>
          
<br/>   

- **변경 된 데이터 값을 적절한 시점에 가져오는 방법**
    - 캐시 된 데이터를 찾았으나 expireTime이 현재 시간 기준 만료 되었다면 리패칭 하여 받아온 데이터로 교체합니다.

<br/>      

- **브라우저 스토리지의 단점 극복**
    - 사용자가 직접 로컬스토리지를 조작하는 경우 `JSON 파싱이 불가`하거나, `루트부터 캐시 된 노드 까지 순회가 불가한 구조`가 될 수 있습니다. 이 경우 `에러 핸들링`을하여 `캐시를 저장하는 스토리지를 초기화` 합니다.

    - 로컬 스토리지 조작, 에러메세지, 스토리지 초기화
      <br/>
      <img width="500" alt="로털 스토리지 조작" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/assets/68241138/c00cda1a-8476-4a26-89a9-58be54462df1"/>
      <br/>
      <img width="500" alt="에러메세지" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/assets/68241138/c1f67e0a-6199-41b7-8eaa-1b573db508f1"/>
      <br/>
      <img width="500" alt="스토리지 초기화" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/assets/68241138/28535a7d-7348-481d-8431-171c7fe11920">
    <details>
      <summary><b>👈코드 보기</b></summary>
        <div markdown="1">
            <ul>
              https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/blob/fca886da3c84a7fb7575d44df6a96b4b5b0ab1a4/src/utils/localStorage.ts#L1-L15
            </ul>
        </div>
    </details>

<br/>

### 2. 입력별 API 호출 횟수를 줄이는 전략
- 입력값이 아무것도 없으면 요청하지 않습니다.
- 디바운싱을 활용해 500ms이상 타이핑이 멈추면 데이터를 요청하도록 유도하여 불필요한 요청을 줄였습니다.
- 한글의 경우 완전한 음절이 완성되지 않으면(자음/모음만 입력 시) 해당 부분을 필터링하여 요청합니다.
    <details>
    <summary><b>👈코드 보기</b></summary>
        <div markdown="1">
            <ul>
              https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/blob/fca886da3c84a7fb7575d44df6a96b4b5b0ab1a4/src/containers/SearchContainer.tsx#L20-L31
            </ul>
        </div></details>
  
- API 요청 결과는 캐싱하고, 이후 동일한 요청이 들어오면 API 요청 대신 캐싱된 값을 활용합니다.(캐싱데이터 expire time: 12시간)
  <details>
    <summary><b>👈코드 보기</b></summary>
        <div markdown="1">
            <ul>
              https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/blob/fca886da3c84a7fb7575d44df6a96b4b5b0ab1a4/src/utils/searchTrieCache.ts#L146-L187
            </ul>
        </div></details>
  

### 3. 키보드를 이용한 추천 검색어 기능 사용법
- 검색어를 입력했을 때 추천 검색어가 없으면, '추천 검색어가 없습니다'라는 문구가 출력됩니다.
- 추천 검색어가 있는 경우 키보드 위/아래 방향키로 이동 가능하고, 엔터 키를 눌러 검색할 수 있습니다.
    <details>
    <summary><b>👈코드 보기</b></summary>
        <div markdown="1">
            <ul>
              https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/blob/9ef6d4375164faabf717b3f8a7ccfb8e54b94baf/src/hooks/useKeyboard.ts#L3-L43
            </ul>
        </div></details>

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
  - 결론: **Trie 자료 구조를 사용하여 구현**
  - 근거
    - 이미 캐시에 저장된 데이터 중에서도 사용자의 입력값이 포함된 경우, 해당 데이터를 가공하여 재사용할 수 있게 하여 API 호출 최소화 및 시스템의 효율성 극대화
   
3. 언제 fresh한 데이터가 필요한가? (expire time)
  - 결론: **12시간이 지나면 만료**
  - 근거
    - 실제 서비스라면 브라우저를 닫을 때 캐싱데이터가 삭제되거나, 길게 설정해도 괜찮을 것 같지만 과제 구현 사항을 위해 비교적 짧게 설정
   
4. 캐싱된 데이터는 어디에 저장하는가?
  - 결론: **LocalStorage에 저장**
  - 근거
    - API 호출을 최소화하는 것이 주된 목적인 캐싱 작업에 있어서, 브라우저의 종료 후 재시작에도 데이터가 유지되는 LocalStorage를 선택
    - Trie 자료구조를 효율적으로 사용할 수 있는 데이터 베이스 구조를 지원함으로써 검색 속도와 정확성을 극대화
    - 에러처리 (순회 불가 구조, JSON파싱 불가 구조, 용량) 가능

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

<div align="center">
    <img width="500" alt="3주차_아키텍처_2" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-3-11/assets/70276660/98141382-cec6-45af-990f-6ca34c14ed20">
</div>

### 3. 주요 기능

#### `검색어 추천`
> - 사용자의 편의를 위해 질환명에 대한 검색어 추천 기능을 제공합니다.
> - 입력한 검색어에 대응하는 추천 검색어가 없을 경우, 검색어 없음 안내 문구를 출력합니다.

#### `추천 검색어 API 호출별 로컬 캐싱`
> - 사용자의 입력값이 없거나 한글 음절이 완성되지 않은 경우(즉, 자음 또는 모음만 입력된 경우), 데이터 요청을 하지 않아 불필요한 **네트워크 트래픽을 최소화**합니다.
> - 한글의 경우 완전한 음절이 완성되지 않으면(자음/모음만 입력 시) 해당 부분을 **필터링**하여 요청합니다.
   >   - **ex) 감ㅁ기 → 감기 , 감기ㅁ → 감기**
> - 디바운스 기법을 활용하여 500ms 동안 타이핑 멈춤 감지 시에만 데이터를 실제로 요구함으로써 **서버와 클라이언트 간의 부담**을 줄입니다.
> - 모든 API 응답은 **로컬에서 캐싱**되며, 이후 동일한 요청이 발생하면 API를 호출하는 대신 캐시에서 데이터를 가져옵니다.
> - 캐싱된 데이터는 **12시간이 지나면 만료**됩니다.

#### `키보드만으로 추천 검색어 이동`
> - 사용자가 추천된 검색어 중 **원하는 항목으로 이동하고 선택**할 수 있도록, 위/아래 방향키(ArrowUp/ArrowDown)와 엔터 키의 조합을 활용할 수 있습니다.

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

 
