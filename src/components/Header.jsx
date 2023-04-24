import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import styles from "./styles/Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardVoice } from "react-icons/md";
import { BsYoutube, BsBell } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Button icon={<RxHamburgerMenu />} tooltip = {""}/>
        <BsYoutube />
        <p>Youtube</p>
      </div>
      <div className={styles.searchbar}>
        <SearchBar />
        <Button icon={<MdKeyboardVoice />} tooltip = {"음성으로 검색"} />
      </div>
      <ul className={styles.info}>
        <Button icon={<BiVideoPlus />} tooltip = {"만들기"}/>
        <Button icon={<BsBell />} tooltip = {"알림"}/>
        <Button icon={"내사진"} tooltip = {""}/>
      </ul>
    </header>
  );
}

