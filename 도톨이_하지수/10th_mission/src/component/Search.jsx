import React from "react";
import { useState } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
} from "../style/Search.style";

export default function Search() {
  const [search, setsearch] = useState("");

  const handleSearch = () => {
    setsearch();
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <SearchButton onClick={handleSearch}> OK </SearchButton>
    </SearchContainer>
  );
}
