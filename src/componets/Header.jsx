import "./Header.css";

import React from "react";

function Header({ title, theme }) {
  return (
    <header>
      <h1>Welcome {theme}, {title} </h1>
    </header>
  );
}

export default Header;
