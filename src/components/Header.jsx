import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import styles from "./styles/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardVoice } from "react-icons/md";
import { BsYoutube, BsBell } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Button icon={<GiHamburgerMenu />} />
        <BsYoutube />
        <p>Youtube</p>
      </div>
      <div className={styles.searchbar}>
        <SearchBar />
        <Button icon={<MdKeyboardVoice />} />
      </div>
      <ul className={styles.info}>
        <Button icon={<BiVideoPlus />} />
        <Button icon={<BsBell />} />
        <Button icon={"내사진"} />
      </ul>
    </header>
  );
}

