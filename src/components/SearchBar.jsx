import React, { useState } from "react";
import Button from "./Button";
import styles from "./styles/SearchBar.module.css";
import { IoIosSearch, IoMdClose } from "react-icons/io";

export default function SearchBar() {
  const [text, setText] = useState("검색");
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <searchbar className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="검색"
          value={text}
          onChange={handleChange}
          className={styles.input}
        ></input>
        <Button icon={<IoMdClose />} tooltip={""} customstyle={styles.close} />
        <Button
          icon={<IoIosSearch />}
          tooltip={"검색"}
          customstyle={styles.search}
        />
      </form>
    </searchbar>
  );
}
