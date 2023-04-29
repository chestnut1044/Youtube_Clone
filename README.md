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
- Sidebar(사이드바)
- SidebarList(사이드바 항목)
- Container(메인 화면 컨테이너)
- Video(비디오)
- Comment(댓글)
- Recommend(추천)

## 👍구현 순서
### completed
- 컴포넌트 분류하기
- 라우팅을 위한 페이지 설정
- 헤더
- 사이드 메뉴

### ~ ing
- 반응형
- 메인 컴포넌트
- 라우팅기능
- 다크모드
- 인급동
- 영상마다 채널정보/시간정보 api로 받아오기

### 리팩토링 하고싶은 요소
- 브라우저별로 사이즈 체크
- 성능 개선
- 


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
> 어떻게 넘겨줄까 고민했는데 부모 컴포넌트에서 react-icons로부터 icon컴포넌트를 import해오고 컴포넌트를 그대로 넘겨줘서 button 컴포넌트에서는 기능만 클릭기능과 스타일링만 할 수 있게 하면된다.

<br/>

> **🤔 사이드바의 컴포넌트를 어떻게 나누어 주면 좋을까?**<br/>
>![ㄴㄴ](public\images\sidebar.png) <br/>
> 사이드바의 항목들은 위 사진처럼 되어 있는데 각 항목들의 hover 효과나 사이즈가 동일해 같은 컴포넌트를 쓰는것이 좋을 것 같다. Sidebar 컴포넌트 내부에서 SidebarList컴포넌트를 구분선 별로 나눠서 하나의 태그로 감싸줄지, Sidebar에서 SidebarList 컴포넌트를 쭉 나열할지 고민하다가 유튜브의 사이드바는 정적으로 보이기 때문에 후자로 정했다. 반응형으로 사이즈를 줄여봐도 정적으로 보이기때문에 일단 나열하기로 했다.<br/><br/>
> 

> **🤔 사이드바에서 스크롤을 줄 수 있는 방법은?**<br/>
>사이드바 오버 시 사이드바 스크롤만 조절할 수 있게 해보았다. 
> 

<br/>

>**🤔 버튼 오버시 설명창 띄우기!(relation과 absolute의 관계, ::after)**<br/>
> 유튜브 헤더부터 코드 짜는데 버튼 오버시 다음과 같은 설명이 토글되는것이 보였다.
> 이를 tooltip라고 한다고 한다
>![ㄴㄴ](public\images\bubble.png) <br/>
> **Button 컴포넌트**
>```jsx
>export default function Button({ icon, tooltip }) {
>  return (
>    <button className={styles.button} title={"icon"}>
>      <div className={styles.icon}>{icon}</div>
>      <p className={styles.tooltip}>{tooltip} </p>
>    </button>
>  );
>}
>```
>
> absolute는 부모 엘리먼트 내부에 속박되지 않고 독립된 배치 문맥을 가짐. 단, 상위 엘리먼트중 position 속성이 relative인 엘리먼트가 있다면 그중 가장 가까운 엘리먼트의 내무에서만 자유롭게 배치할수 있다.<br/>
> 즉 나의 헤더 컴포넌트에서 tooltip은 아이콘의 바로 아래에서 위치되어야 하기 때문에 button에 relative 속성을 준 후 tooltip에서 absolute를 적용한뒤 위치를 조정해주면 button을 기준으로 위치가 잡힌다.
> 잡힌 위치에 맞게 css 작업해주면 되는데 tooltip이 필요없는 버튼도 떠버린다.<br/>
>![ㄴㄴ](public\images\tooltip.png) <br/>
> 따라서 조건 삼항연산자를 통해 아래와 같이 스타일링 해주었다.
> **Button 컴포넌트**
>```jsx
>export default function Button({ icon, tooltip }) {
>  return (
>    <button className={styles.button} onClick={handleClick}>
>      <div className={styles.icon}>{icon}</div>
>      <span className={tooltip === "" ? styles.tooltip_none : styles.tooltip}>
>        {tooltip}
>      </span>
>    </button>
>  );
>}
>```
> **Button.module.css**
>```css
>.button {
>  position: relative;
>  width: 40px;
>  height: 40px;
>  margin: 0;
>  padding: 0;
>  border: none;
>  background-color: var(--color-white);
>  border-radius: 50%;
>}
>
>.button:hover span {
>  opacity: 1;
>  visibility: visible;
>}
>
>.tooltip {
>  position: absolute;
>  width: max-content;
>  padding: 8px;
>  border-radius: 5px;
>  transform: translateX(-50%) translateY(80%);
>  visibility: hidden;
>  background-color: var(--color-dk-gray);
>  color: var(--color-white);
>}
>```
> Ref :  https://github.com/KumJungMin/CSS_ANIMATION_HOVER_ICON
>
>

<br/>

> **🤔 같은 기능을 하는 컴포넌트지만 다른 스타일링을 해주고 싶다!**<br/>
> searchbar 스타일링중 searchbar의 submit 버튼, 뿐만 아니라 다양한 곳에서 button 컴포넌트의 tooltip 효과가 들어있다는것을 알게됐다. <br/>
>![button](public\images\button.png) <br/>
>![searchbarbutton](public\images\searchbarbutton.png) <br/>
>![ive](public\images\ive.png) <br/>
> tooltip 효과를 매번 구현하는것은 재사용성이 떨어진다고 생각하여 유튜브내의 모든 버튼은 button 컴포넌트를 사용하는것이 좋다고 판단했고, 기존 searchbar에서 새로 만들었던 button 태그를 지우고 button 컴포넌트를 사용했다.<br/>
> 하지만 button이 사용되는곳마다 같은 스타일링을 하는것이 아니기 때문에, 컴포넌트를 호출하는곳에서 따로 스타일링 해주는 법을 알아보았다.
>
> **SearchBar 컴포넌트(부모컴포넌트)**
>```jsx
>export default function SearchBar() {
>  return (
>    <searchbar className={styles.searchbar}>
>        <Button icon={<IoIosSearch />} tooltip={"검색"} customstyle={styles.customstyle}/>
>    </searchbar>
>  );
>}
>```
> **Button 컴포넌트(자식컴포넌트)**
>```jsx
>export default function Button({ icon, type, tooltip, customstyle }) {
>  return (
>    <button className={`${styles.button} ${customstyle}`} onClick={handleClick} />
>  );
>}
>```
> 부모 컴포넌트에서 작성한 스타일을 자식 컴포넌트로 같이 넘기면 된다.
>

<br/>

> **🤔 검색창에 들어가는 데이터는 어느 컴포넌트에서 만들어야 할까 ?**<br/>
> 헤더 기능 구현중 useState()를 사용에 searchbar의 데이터를 바꾸려 했는데, 이 setState()는 어느 곳에서 선언해줘야할지가 고민되었다.

>
>
>
>

<br/>

> **🤔 긴 텍스트를 자르고 생략 부호(...)를 사용하여 표현하는 방법은 무엇일까?**<br/>
>![ellipsis](public\images\ellipsis.png) <br/>
> 내가 구현하고 있는 위의 사진처럼 오프라인 저장 동영상이 줄이 바뀌어져 보이는게 아니라 줄을 넘어가게 되면 (...)로 표기하는 방법이 무엇인지 알아보았다.<br/>
> **sideBarList 컴포넌트**
>```jsx
>export default function SidebarList({ icon, type, message }) {
>  return (
>    <sidebarlist className={styles.sidebarlist}>
>      <icon className={styles.icon}>{icon}</icon>
>      <text className={styles.text}>{type}</text>
>    </sidebarlist>
>  );
>}
>```
> **sideBarList CSS**
>```css
>.text{
>  font-family: var(--font-main);
>  font-size: 14px;
>  overflow: hidden;
>  cursor: pointer;
>  white-space: nowrap;
>  text-overflow: ellipsis;
>}
>```
> text에서 overflow: hidden속성을 추가하여 넘치는 텍스트를 숨긴다.그 후 white-space: nowrap;을 속성을 사용해 넘치는 텍스트의 줄바꿈이 되지 않도록 설정한 후 넘치는 부분을 text-overflow: ellipsis; 로 설정하여 (...)으로 고쳐보았다.



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