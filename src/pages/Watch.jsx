import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./styles/Watch.module.css";
import Video from "../components/Video";
export default function Watch() {
  const [
    searchQuery,
    sideToggle,
    setSideToggle,
    currentVideo,
    setCurrentVideo,
  ] = useOutletContext();

  useEffect(() => {
    if(sideToggle[0]){
      setSideToggle([false, true]);
    }
  }, []);
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <watch className={styles.watch}>
      <div className={styles.main}>
        <Video
          type="watch"
          data={currentVideo}
          className={styles.video}
        ></Video>
        <div className={styles.container}>
          <div className={styles.info}>정보</div>
          <div></div>
          <div className={styles.comment}>댓글</div>
        </div>
      </div>
      <div className={styles.side}>
        <hr />
        {a.map((data)=>{
          return <Video type="related"></Video>
        })}
      </div>
    </watch>
  );
}
