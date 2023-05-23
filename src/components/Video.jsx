import React, { useEffect } from "react";
import styles from "./styles/Video.module.css";

export default function Video({ key, type, data }) {
  if (type === "search") {
    return (
      <div className={styles.search_container}>
        <img
          src={data.snippet.thumbnails.medium.url}
          className={styles.search_img}
        ></img>
        <div className={styles.search_metadata}>
          <p className={styles.search_title}>{decodeHtmlEntity(data.snippet.title)}</p>
          <p className={styles.search_views}>{`조회수 ${viewCountCalc(100000)} · ${publishedAtCalc(data.snippet.publishedAt)}`}</p>
          <div className={styles.search_info}>계정</div>
          <p className={styles.search_description}>설명하는공간이래</p>
        </div>
      </div>
    );
  } else if (type === "related") {
    return (
      <div className={styles.related_container}>
        <img
          src={data.snippet.thumbnails.medium.url}
          className={styles.related_img}
        ></img>
        <div className={styles.related_metadata}>
          {/* 아래 이름 고쳐주기 */}
          <p className={styles.related_title}>{data.snippet.title}</p>
          <div className={styles.related_info}>계정</div>
          <p className={styles.related_views}>{`조회수 ${viewCountCalc(100000)} · ${publishedAtCalc(data.snippet.publishedAt)}`}</p>
        </div>
      </div>
    );
  } else if (type === "watch") {
    return (
      <iframe
        id="ytplayer"
        type="text/html"
        width="900"
        height="550"
        src={`https://www.youtube.com/embed/${data}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    );
    // return <div>{JSON.stringfy(data)}</div>;
  } else if (type === "container") {
    return (
      <div className={styles.container_container}>
        <img
          src={data.snippet.thumbnails.medium.url}
          className={styles.container_img}
        ></img>
        <div className={styles.container_metadata}>
          <div className={styles.container_info}>계정</div>
          <div className={styles.container_detailmetadata}>
            <p className={styles.container_title}>{data.snippet.title}</p>
            <p className={styles.container_channel}>{data.snippet.channelTitle}</p>
            <p className={styles.container_description}>{`조회수 ${viewCountCalc(data.statistics.viewCount)} · ${publishedAtCalc(data.snippet.publishedAt)}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <iframe
  id="ytplayer"
  type="text/html"
  frameborder="none"
  // 작성필요없음
  onMouseOver={handleMouseOver}
  
  width="360"
  height="200"publishedAtCalc
  src="https://www.youtube.com/embed/11cta61wi0g?autoplay=0&controls=0modestbranding&enablejsapi"
  className={styles.img}
></iframe> */
}

function decodeHtmlEntity(str){
  return new DOMParser().parseFromString(str, "text/html").body.textContent;
}

function viewCountCalc(n){
  n = n*0.0001
  if (String(n.toFixed(1)).slice(-1) == '0'){
    return `${n.toFixed(0)}만회`;
  }
  return `${n.toFixed(1)}만회`;
}

function publishedAtCalc(n){
  let current = new Date();
  let prev = new Date(n);
  let time = (current.getTime()-prev.getTime())/(1000)
  console.log(n)
  if(time <60){ // 60초 = 1분 1분보다 작다면 초전으로 표기
    return `${time}초전`
  }
  else if(time<360){ // 360초  = 60분 = 1시간 1시간보다 작다면 분전으로 표기
    return `${time/60}분전`
  }
  else if(time<86400){ // 86,400초 = 1440분 = 24시간 = 1일 1일보다 작다면 시간전으로 표기
    return `${time/60*60}시간전`
  }
  else if(time<2419200/4){ //  = 28일보다 작다면 개월전으로 표기
    return `${Math.floor(time/(60*60*24))}일전`
  }
  else if(time<2419200){
    return `${Math.floor(time/(60*60*24*7))}주전`
  }
  else{
    return `${Math.floor(time/(60*60*24*28))}개월전`
  }
}