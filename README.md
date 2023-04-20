# 유튜브 클론 코딩

## 👍 페이지
- Root(루트페이지)
- VideoPage(영상 클릭시 뜨는 비디오 페이지)
- NotFound(Error)

## 👍컴포넌트
- Header(헤더)
- SearchBar(검색창)
- Button(버튼)
- Info(계정)
- Sidebar(구현목록)
- Container(메인 화면 컨테이너)
- Video(비디오)
- Comment(댓글)
- Recommend(추천)

## 👍구현 순서
### completed
- 컴포넌트 분류하기
- 라우팅을 위한 페이지 설정


### ~ ing
- 반응형
- 헤더
- 메인 컴포넌트
- 사이드 메뉴
- 라우팅기능
- 다크모드
- 인급동
- 영상마다 채널정보/시간정보 api로 받아오기




## 👍고민한 부분
> **🤔 컴포넌트의 props로 react-icons의 컴포넌트를 넘겨줬을때 어떻게 사용할수 있을까?**
![ㄴㄴ](public\images\icons.jpg) 
실제 유튜브 화면을 보니 왼쪽의 햄버거, 음성녹음, 동영상업로드, 알림까지 모두 다 같은 버튼형식이라는것을 발견했다.<br/>
![ㄴㄴ](public\images\icon1.png) 
![ㄴㄴ](public\images\icon2.png) <br/>
그래서 해당 버튼을 컴포넌트(Button)화 하기로 했는데, 그러기 위해서는 Header 컴포넌트에서 props로 해당 아이콘 이름을 전달해 주어야 한다.<br/><br/>
> **Header 컴포넌트**
>```jsx
> import { GiHamburgerMenu } from "react-icons/gi";
> export default function Header() {
>  return (
>    <header className={styles.header}>
>      <Button icon={<GiHamburgerMenu/>} />
>      <BsYoutube />
>      <p>Youtube</p>
>      <SearchBar />
>    </header>
>  );
>}
> ```
> <br/>
>
> **Button 컴포넌트**
>```jsx
>import React from 'react';
>export default function Button({ icon }) {
>  return <button>{icon}</button>
>}
>```
>
> 어떻게 넘겨줄까 고민했는데 부모 컴포넌트에서 react-icons로부터 icon컴포넌트를 import해오고 컴포넌트를 그대로 넘겨줘서 button 컴포넌트에서는 기능만 클릭기능과 스타일링만 할 수 있게 하면된다.
>
>

<br/>
<br/>


## 👍 구현하면서 마주친 오류
> **리액트 라우터를 사용해 페이지별로 경로를 잡아주는 도중 발생한 문제!**
<br/> 사진처럼 에러메세지는 따로 표시되지 않았고, 무한 로딩 되는 상태
![ㄴㄴ](public\images\react-router_error.png) 
  <br/> 🔷 예상되는 이유 1. 네트워크 문제 
  <br/> 사진은 없지만 소스탭에서 그 어떤 파일도 다운로드 되지 않아 네트워크나 통신쪽 문제인줄 알았으나 다른 사이트나 다른 프로젝트는 실행 잘되는것 같아 배제
  <br/> 🔷 예상되는 이유 2. 모듈 충돌
  <br/> 사실 리액트 라우터 자체의 문제라고 생각을 못했던 이유가 리액트 라우터만 install 하고 경로 잡아줬을때는 실행이 잘되다가 react-icons 설치후 문제가 생겨 모듈 충돌인줄 알았다. 모듈 하나씩 import하고 실행해도 똑같은 현상 발생..
  <br/> 🔷 예상되는 이유 3. 리액틀 라우터 버전문제 (해결완료)
  <br/> 아무리 생각해봐도 리액트 라우터 문제인 것 같아 리액트 라우터 버전 관련 구글링을 해보니 버전 5와 버전6의 문법이 달라 버전을 강제로 5로 낮춘다는 글이 많이 보였다. 이 프로젝트의 라우터 버전은 6.10이었고 공식문서에서 버전 6.10에 맞는 코드를 짰기 때문에 계속 헤메이다가 버전 5로 다운그레이드하니 해결됨