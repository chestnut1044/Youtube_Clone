import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  const handleSubmit = () => {};
  const handleChange = () => {};
  const test = "ss";
  return (
    <searchbar>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색"
          value={test}
          onChange={handleChange}
        ></input>
        <button>
          <IoIosSearch />
        </button>
      </form>
    </searchbar>
  );
}
