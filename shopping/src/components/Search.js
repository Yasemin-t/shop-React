import React from "react";

function Search({setSearch}) {
  return (
    <div className="container1">
      <input
        className="input"
        name="search"
        text-color="white"
        placeholder="Kitap ismi giriniz..."
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}
export default Search;
