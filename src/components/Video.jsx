import React from "react";
import styles from "./styles/Video.module.css";

export default function Video({type, text}) {
  if(type === "search"){
    return <div className={styles.video}>{text}</div>;
  }
}
