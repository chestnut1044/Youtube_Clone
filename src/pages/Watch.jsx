import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
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
  const [relateVideo, setRelatedVideo] = useState();
  useEffect(() => {
    fetch("/data/related/연관동영상.json")
      .then((res) => res.json())
      .then((res) => setRelatedVideo(res))
      .then((res) => console.log(relateVideo));
  }, []);
  useEffect(() => {
    if (sideToggle[0]) {
      setSideToggle([false, true]);
    }
  }, []);

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
        <div className={styles.snippet_title}>
          {decodeHtmlEntity(currentVideo.snippet.title)}
        </div>
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

        {relateVideo !== undefined &&
          relateVideo.items.map((videoData) => {
            return (
              <Link
                to={`/watch?${videoData.id.videoId}`}
                className={styles.link}
                onClick={() => setCurrentVideo(videoData)}
                preventScrollReset={false}
              >
                <Video type="related" data={videoData}></Video>
              </Link>
            );
          })}
      </div>
    </watch>
  );
}
function decodeHtmlEntity(str) {
  return new DOMParser().parseFromString(str, "text/html").body.textContent;
}
