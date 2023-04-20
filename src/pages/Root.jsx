import React from "react";
import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
import styles from './styles/Root.module.css'

export default function Root() {
  return (
    <div className={styles.root}>
      <Headers />
      <div className={styles.main}>
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}
