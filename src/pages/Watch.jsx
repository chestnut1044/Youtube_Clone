import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./styles/Watch.module.css";
import Video from "../components/Video";
import Account from "../components/Account";
import Button from "../components/Button";
export default function Watch() {
  const [
    searchQuery,
    sideToggle,
    setSideToggle,
    currentVideo,
    setCurrentVideo,
  ] = useOutletContext();

  useEffect(() => {
    if (sideToggle[0]) {
      setSideToggle([false, true]);
    }
  }, []);
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <watch className={styles.watch_conrainer}>
      <div className={styles.main}>
        <div className={styles.movie}>
          {typeof currentVideo.id === "string" ? (
            <Video
              type="watch"
              data={currentVideo.id}
              className={styles.video}
            />
          ) : (
            <Video
              type="watch"
              data={currentVideo.id.videoId}
              className={styles.video}
            />
          )}
        </div>
        <div className={styles.snippet_title}>{currentVideo.snippet.title}</div>
        <div className={styles.channer_container}>
          <Account></Account>
          <div className={styles.rating_button_container}>
            <Button>ss</Button>
            <Button>ss</Button>
            <Button>ss</Button>
            <Button>ss</Button>
          </div>
        </div>
        <div className={styles.description_container}></div>
        <div className={styles.comment_container}>댓글컨테이너</div>
      </div>
      <div className={styles.side}>
        <hr />
        {a.map((data) => {
          return <Video type="related"></Video>;
        })}
      </div>
    </watch>
  );
}
