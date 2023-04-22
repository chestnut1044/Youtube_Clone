import React from "react";
import styles from "./styles/SidebarList.module.css";

export default function SidebarList({ icon, type, message }) {
  return (
    <sidebarlist className={styles.sidebarlist}>
      <icon className={styles.icon}>{icon}</icon>
      <text className={styles.text}>{type}</text>
    </sidebarlist>
  );
}
