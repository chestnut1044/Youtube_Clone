import React, { useState } from "react";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./styles/Root.module.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [sideToggle, setSideToggle] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentVideo, setCurrentVideo] = useState("");
  console.log(currentVideo)
  return (
    <div className={styles.root}>
      <Headers
        setSearchQuery={setSearchQuery}
        sideToggle={sideToggle}
        setSideToggle={setSideToggle}
        setCurrentVideo={setCurrentVideo}
      />
      <div className={styles.main}>
        <Sidebar sideToggle={sideToggle} />
        <Outlet context={[searchQuery, sideToggle, setSideToggle, currentVideo, setCurrentVideo]} />
      </div>
    </div>
  );
}
