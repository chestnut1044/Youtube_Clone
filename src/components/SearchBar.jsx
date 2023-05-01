import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./styles/SearchBar.module.css";
import { IoIosSearch, IoMdClose } from "react-icons/io";

export default function SearchBar({ text, setText }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (text.length === 0) {
      return;
    }
    navigate(`result/${text}`);
    e.preventDefault();
  };
  const handleReset = () => {
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
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
          type={"button"}
          icon={<IoMdClose />}
          tooltip={""}
          customstyle={styles.close}
          onClick={handleReset}
        />
        <Button
          type={"submit"}
          icon={<IoIosSearch />}
          tooltip={"검색"}
          customstyle={styles.search}
        />
      </form>
    </searchbar>
  );
}
