import React from "react";
import styles from "./styles/Button.module.css";

export default function Button({ icon, tooltip, customstyle, customstate }) {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <button className={`${styles.button} ${customstyle}`} onClick={handleClick}>
  
      <div className={styles.icon}>{icon}</div>
      <span className={tooltip === "" ? styles.tooltip_none : styles.tooltip}>
        {tooltip}
      </span>
    </button>
  );
}
