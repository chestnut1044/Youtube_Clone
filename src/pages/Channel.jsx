import React from "react";
import styles from "./styles/Channel.module.css";
export default function Channel() {
  return (
    <div className={styles.channel_container}>
      <div className={styles.banners}>이미지</div>
      <div className={styles.header}>채널 헤더</div>
      <hr className={styles.hr}/>
      <div className={styles.video_container}>
        <div>최근동영상</div>
        <div>인기동영상</div>
      </div>
    </div>
  );
}
