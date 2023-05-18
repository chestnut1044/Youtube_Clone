import React, {useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./styles/Watch.module.css";
import Video from "../components/Video";
export default function Watch() {
  const [searchQuery, sideToggle, setSideToggle, currentVideo, setCurrentVideo] = useOutletContext();

  useEffect(() => {
    setSideToggle(false);
  }, []);

  return (
    <watch className={styles.container}>
      <div className={styles.main}>
        <Video type="watch" data={currentVideo}></Video>
        <div className={styles.comment}>댓글</div>
      </div>
      <div className={styles.side}>사이드바</div>
    </watch>
  );
}
