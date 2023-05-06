import React from "react";
import styles from "./styles/Button.module.css";

export default function Button({
  type,
  icon,
  tooltip,
  customstyle,
  text,
  onClick,
}) {
  return (
    <button
      className={`${styles.button} ${customstyle}`}
      onClick={onClick}
      type={type}
    >
      <div className={styles.icon}>{icon}</div>
      {text !== undefined ? <p className={styles.text}>{text}</p> : null}
      <span className={tooltip === "" ? styles.tooltip_none : styles.tooltip}>
        {tooltip}
      </span>
    </button>
  );
}
