import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
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
      <section className="SearchForm">
        <form onSubmit={search} className="SearchForm">
          <div className="">
            <input
              type="search"
              autoFocus={true}
              className="SearchInput"
              onChange={handleKeywordChange}
            />
          </div>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
