import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form
        onSubmit={search}
        className="SearchForm form-inline align-items-center"
      >
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="search"
            autoFocus={true}
            className="form-control"
            onChange={handleKeywordChange}
          />
        </div>
        <input type="submit" value="Search" className="btn btn-primary mb-2" />
      </form>
    </div>
  );
}
