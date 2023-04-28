import React, { useState } from "react";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import styles from './styles/Root.module.css'
import Result from "./Result";

export default function Root() {
  const [sideToggle, setSideToggle] = useState(true);
  return (
    <div className={styles.root}>
      <Headers sideToggle setSideToggle/>
      <div className={styles.main}>
        <Sidebar />
        <Container />

      </div>
    </div>
  );
}
