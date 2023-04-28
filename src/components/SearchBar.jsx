import React, { useState } from "react";
import Button from "./Button";
import styles from "./styles/SearchBar.module.css";
import { IoIosSearch, IoMdClose } from "react-icons/io";

export default function SearchBar() {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleDelete = () => {
    setText("");
  };
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
        <Button
          icon={<IoMdClose />}
          tooltip={""}
          customstyle={styles.close}
          onClick={handleDelete}
        />
        <Button
          icon={<IoIosSearch />}
          tooltip={"검색"}
          customstyle={styles.search}
        />
      </form>
    </searchbar>
  );
}
