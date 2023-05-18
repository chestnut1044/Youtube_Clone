import React, { useEffect } from "react";
import styles from "./styles/Video.module.css";

const decodeHtmlEntity = (str) => {
  return new DOMParser().parseFromString(str, "text/html").body.textContent;
};

export default function Video({ key, type, data }) {
  if (type === "search") {
    return (
      <div className={styles.container}>
        <img src={data.thumbnails.medium.url} className={styles.img}></img>
        <div className={styles.metadata}>
          <p className={styles.title}>{decodeHtmlEntity(data.title)}</p>
          <p className={styles.views}>조회수</p>
          <div className={styles.info}>계정</div>
          <p className={styles.description}>설명하는공간이래</p>
        </div>
      </div>
    );
  } else if (type === "watch") {
    console.log(data.id.videoId);
    return (
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${data.id.videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    );

    // return <div>{JSON.stringfy(data)}</div>;
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
  height="200"
  src="https://www.youtube.com/embed/11cta61wi0g?autoplay=0&controls=0modestbranding&enablejsapi"
  className={styles.img}
></iframe> */
}
