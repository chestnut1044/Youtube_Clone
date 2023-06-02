import React, { useEffect, useState } from "react";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./styles/Root.module.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [sideToggle, setSideToggle] = useState([true, false]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");
  const [channel, setChannel] = useState("");


  return (
    <div className={styles.root}>
      <Headers
        setSearchQuery={setSearchQuery}
        sideToggle={sideToggle}
        setSideToggle={setSideToggle}
        setCurrentVideo={setCurrentVideo}
      />
      <div className={styles.main}>
        <Sidebar sideToggle={sideToggle} setSideToggle={setSideToggle}/>
        <Outlet  context={[searchQuery, sideToggle, setSideToggle, currentVideo, setCurrentVideo, channel, setChannel]} />
      </div>
    </div>
  );
}
