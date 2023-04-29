import React, { useState } from "react";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./styles/Root.module.css";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [sideToggle, setSideToggle] = useState(true);
  return (
    <div className={styles.root}>
      <Headers sideToggle setSideToggle />
      <div className={styles.main}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
