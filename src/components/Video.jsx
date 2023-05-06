import React from "react";
import styles from "./styles/Video.module.css";

const decodeHtmlEntity = (str) => {
  return new DOMParser().parseFromString(str, "text/html").body.textContent;
};

export default function Video({ key, type, data }) {

  if (type === "search") {
    return (
      <div className={styles.container}>
        <div className={styles.video}>
          <img src={`data.thumbnails/default/url`}></img>
        </div>
        <div className={styles.metadata}>
          <p className={styles.title}>
          {decodeHtmlEntity(data.title)}
          </p>
          <p className={styles.views}>조회수</p>
          <div className={styles.info}>계정</div>
          <p className={styles.description}>설명하는공간이래</p>
        </div>
      </div>
    );
  } else if (type === "main") {
    return <div>메인이래요</div>;
  }
}
