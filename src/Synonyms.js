import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="row Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          if (index < 5) {
            return <li key={index}>{synonyms}</li>;
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    return null;
  }
}
