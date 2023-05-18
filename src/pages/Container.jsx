import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./styles/Container.module.css";
import Video from "../components/Video";

export default function Container() {
  const [searchQuery, sideToggle, setSideToggle] = useOutletContext();
  
  // useEffect(() => {
  //   setSideToggle(true);
  // }, []);
  
  return (
    <div className={styles.container}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}
