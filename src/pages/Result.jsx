import React, { useEffect, useState } from "react";
import styles from "./styles/Result.module.css";
import Button from "../components/Button";
import { RiEqualizerLine } from "react-icons/ri";
import Video from "../components/Video";
import { useOutletContext } from "react-router-dom";

export default function Result() {
  const [searchQuery] = useOutletContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/data/keyword/${searchQuery}.json`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [searchQuery]);

  return (
    <result className={styles.result}>
      <div className={styles.filter}>
        <Button
          icon={<RiEqualizerLine />}
          tooltip=""
          text={"필터"}
          customstyle={styles.filterBtn}
        />
        <hr className={styles.hr} />
      </div>
      <div className={styles.container}>
        {Array.isArray(data.items) &&
          data.items.map((videoData) => {
            if (videoData.id.kind === 'youtube#video') {
              return (
                <Video
                  key={videoData.id}
                  type={"search"}
                  data={videoData.snippet}
                />
              );
            }
          })}
      </div>
    </result>
  );
}
