import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
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
  useEffect(() => {
    if (sideToggle[1]) {
      setSideToggle([!sideToggle[0], false]);
    } else {
      setSideToggle([sideToggle[0], false]);
    }
  }, []);
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className={styles.container}>
      {a.map(() => (
        <Video key={""} type={"container"} data={" "} />
      ))}
    </div>
  );
}
