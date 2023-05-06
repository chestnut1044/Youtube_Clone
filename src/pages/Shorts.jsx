import React from "react";
import Video from "../components/Video";
import Button from "../components/Button";
import styles from "./styles/Shorts.module.css";
import {
  RiThumbUpFill,
  RiThumbDownFill,
  RiMessage2Fill,
  RiShareForwardFill,
  RiMoreFill,
} from "react-icons/ri";

export default function Shorts() {
  return (
    <shorts className={styles.shorts}>
      <videocontainer className={styles.container}>
        비디오개많아
        <Video className={styles.container}>비디오</Video>
      </videocontainer>
      <feedbackbtn className={styles.feedback}>
        <Button
          icon={<RiThumbUpFill />}
          tooltip={"이 동영상이 마음에 듭니다."}
        ></Button>
        <Button
          icon={<RiThumbDownFill />}
          tooltip={"이 동영상이 마음에 들지 않습니다."}
        ></Button>
        <Button icon={<RiMessage2Fill />} tooltip={"댓글"}></Button>
        <Button icon={<RiShareForwardFill />} tooltip={"공유"}></Button>
        <Button icon={<RiMoreFill />} tooltip={"더보기"}></Button>
        <Button tooltip={"계정"} className={styles.info}></Button>
      </feedbackbtn>
    </shorts>
  );
}
