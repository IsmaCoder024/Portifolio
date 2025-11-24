import "./Navigation.css";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { NavLink } from "react-router-dom";

function Navigation({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? (
          <X/>
        ) : (
          <>
            <Menu/> Menu
          </>
        )}
      </button>
      
      <div className="top-board"> 
        <div className={`top-items ${open ? "open" : ""}`}>
          {links.map((link, i) => (
            <a key={i}>
              <NavLink to={link.path}>{link.label}</NavLink>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navigation;
