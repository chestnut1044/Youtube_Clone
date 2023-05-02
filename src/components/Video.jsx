import React from "react";
import styles from "./styles/Video.module.css";

export default function Video({ type, text }) {
  if (type === "search") {
    return (
      <div className={styles.container}>
        <div className={styles.video}>
          {text}
          <img></img>
        </div>
        <div className={styles.metadata}>
          <p className={styles.title}>
            애교용식 1부에 참여하는 비제이들 반응ㅋㅋ ㅇㄴㅇ~!!
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
