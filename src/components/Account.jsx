import React from "react";
import styles from './styles/Account.module.css'
export default function Account({ type, channelId }) {
  if (type === "container") {
    return <div className={styles.ctn_thumbnail}>
      <img></img>
      {/* {channelId} */}
      </div>;
  }
}
