import React from "react";
import styles from "./styles/Result.module.css";
import Button from "../components/Button";
import { RiEqualizerLine } from "react-icons/ri";
import Video from "../components/Video";

export default function Result({ text }) {
  const test = (e) => {
    console.log(text, "E");
  };
  return (
    <result className={styles.result}>
      <div className={styles.filter}>
        <Button
          icon={<RiEqualizerLine />}
          tooltip=""
          text={"필"}
          onClick={test}
        />

        <hr className={styles.hr} />
      </div>
      {/* 내일 할일 이 안에다가 동영상 넣기 */}
      <Video type={"search"} />
      <Video type={"search"} />
      <Video type={"search"} />
    </result>
  );
}
