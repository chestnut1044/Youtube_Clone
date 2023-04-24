import React from "react";
import styles from "./styles/Button.module.css";

export default function Button({ icon, type, tooltip }) {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.icon}>{icon}</div>
      <span className={tooltip === "" ? styles.tooltip_none : styles.tooltip}>
        {tooltip}
      </span>
    </button>
  );
}
