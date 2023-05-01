import React, {useEffect} from "react";
import styles from "./styles/Result.module.css";
import Button from "../components/Button";
import { RiEqualizerLine } from "react-icons/ri";
import Video from "../components/Video";
import { useOutletContext } from 'react-router-dom';

export default function Result() {
  const [searchQuery] = useOutletContext();
  const resultData = []
  console.log(searchQuery)
  return (
    <result className={styles.result}>
      <div className={styles.filter}>
        <Button
          icon={<RiEqualizerLine />}
          tooltip=""
          text={"필"}
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
