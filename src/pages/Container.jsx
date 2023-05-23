import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import styles from "./styles/Container.module.css";
import Video from "../components/Video";

export default function Container() {
  const [
    searchQuery,
    sideToggle,
    setSideToggle,
    currentVideo,
    setCurrentVideo,
  ] = useOutletContext();

  const [mostPopularVideos, setMostPopularVideos] = useState();


  useEffect(() => {
    fetch("/data/mostPopular.json")
      .then((res) => res.json())
      .then((res) => setMostPopularVideos(res))
      .then((res) => console.log(mostPopularVideos));
    if (sideToggle[1]) {
      setSideToggle([!sideToggle[0], false]);
    } else {
      setSideToggle([sideToggle[0], false]);
    }
  }, []);
  return (
    <div className={styles.container}>
      {mostPopularVideos !== undefined && mostPopularVideos.items !== undefined &&
        mostPopularVideos.items.map((videoData) => (
          <Link
            to={`/watch?${videoData.id}`}
            onClick={() => setCurrentVideo(videoData)}
            className={styles.link}
            >
            <Video key={""} type={"container"} data={videoData} />
          </Link>
        ))}
    </div>
  );
}
