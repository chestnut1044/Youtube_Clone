import React, { useEffect, useState } from "react";
import styles from "./styles/Result.module.css";
import Button from "../components/Button";
import { RiEqualizerLine } from "react-icons/ri";
import Video from "../components/Video";
import { useOutletContext } from "react-router-dom";

export default function Result() {
  const [searchQuery] = useOutletContext();
  const [data, setData] = useState([]);
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    fetch(`/data/keyword/${searchQuery}.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [searchQuery]);
  useEffect(() => {
    setResultData(data);
  }, [data]);
  console.log(resultData);

  return (
    <result className={styles.result}>
      <div className={styles.filter}>
        <Button icon={<RiEqualizerLine />} tooltip="" text={"필"} />
        <hr className={styles.hr} />
      </div>
      <div className={styles.container}>
        <Video type={"search"} />
        <Video type={"search"} />
        <Video type={"search"} />
      </div>
      {/* 내일 할일 이 안에다가 동영상 넣기 */}
      {/* text={data.items[0].snippet.title} */}
    </result>
  );
}
