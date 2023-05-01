import React, { useState } from "react";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./styles/Root.module.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [sideToggle, setSideToggle] = useState(true);
  const [text, setText] = useState("");
  return (
    <div className={styles.root}>
      <Headers text={text} setText={setText} />
      <div className={styles.main}>
        <Sidebar />
        <Outlet context={{text}}/>
      </div>
    </div>
  );
}
