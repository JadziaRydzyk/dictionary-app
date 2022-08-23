import React from "react";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <input type="search" autoFocus={true} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
