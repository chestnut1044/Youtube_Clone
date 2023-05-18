import React from "react";
import SidebarList from "./SidebarList";
import styles from "./styles/Sidebar.module.css";
import {
  RiHome5Line,
  RiHome5Fill,
  RiMovieLine,
  RiMovieFill,
  RiDownloadLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { AiOutlineYoutube, AiFillYoutube } from "react-icons/ai";
import { MdOutlineSubscriptions, MdSubscriptions } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { SiYoutubemusic } from "react-icons/si";
import { IoMdTime } from "react-icons/io";
import { RiThumbUpLine, RiThumbUpFill } from "react-icons/ri";
import { HiOutlineSaveAs, HiSaveAs } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Sidebar({ sideToggle }) {

  if (sideToggle) return (
    <div className={styles.sidebar}>
      <div className={styles.staticList}>
        <Link to={`/`} className={styles.link}>
          <SidebarList icon={<RiHome5Line />} type={"홈"} message={"홈"} />
        </Link>
        <Link to={`/shorts`} className={styles.link}>
          <SidebarList
            icon={<AiOutlineYoutube />}
            type={"Shorts"}
            message={"Shorts"}
          />
        </Link>
        <SidebarList
          icon={<MdOutlineSubscriptions />}
          type={"구독"}
          message={"구독"}
        />
        <SidebarList
          icon={<AiOutlineYoutube />}
          type={"Originals"}
          message={"Originals"}
        />
        <SidebarList
          icon={<SiYoutubemusic />}
          type={"Youtube Music"}
          message={"Youtube Music"}
        />
        <hr />
        <SidebarList
          icon={<HiOutlineSaveAs />}
          type={"보관함"}
          message={"보관함"}
        />
        <SidebarList
          icon={<RxCountdownTimer />}
          type={"시청기록"}
          message={"시청기록"}
        />
        <SidebarList
          icon={<RiMovieLine />}
          type={"내동영상"}
          message={"내동영상"}
        />
        <SidebarList
          icon={<IoMdTime />}
          type={"나중에 볼 동영상"}
          message={"나중에 볼 동영상"}
        />
        <SidebarList
          icon={<RiDownloadLine />}
          type={"오프라인 저장 동영상"}
          message={"오프라인 저장 동영상"}
        />
        <SidebarList
          icon={<RiThumbUpLine />}
          type={"좋아요 표시한 동영상"}
          message={"좋아요 표시한 동영상"}
        />
        <SidebarList
          icon={<RiArrowDownSLine />}
          type={"더보기"}
          message={"더보기"}
        />
        <hr />
      </div>

      <div className={styles.subscribeList}>
        <h4></h4>
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
        <SidebarList icon={"아"} type={"계정"} message={"계정"} />
      </div>
    </div>
  );
  else{
    console.log("ㄴㄴ")
  }
}
