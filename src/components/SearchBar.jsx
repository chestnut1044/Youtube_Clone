import React from "react";
import Button from "./Button";
import styles from "./styles/SearchBar.module.css";
import { IoIosSearch, IoMdClose } from "react-icons/io";

export default function SearchBar() {
  const handleSubmit = () => {};
  const handleChange = () => {};
  const test = "검색";
  return (
    <searchbar className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="검색"
          value={test}
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
