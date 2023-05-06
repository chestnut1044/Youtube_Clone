import React from "react";
import styles from "./styles/SidebarList.module.css";

export default function SidebarList({ icon, type, onClick }) {
  return (
    <sidebarlist className={styles.sidebarlist} onClick={onClick}>
      <icon className={styles.icon}>{icon}</icon>
      <text className={styles.text}>{type}</text>
    </sidebarlist>
  );
}
