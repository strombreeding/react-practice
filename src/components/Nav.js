import React from "react";
import axios from "axios";

const Nav = ({ name, fnc }) => {
  return (
    <nav>
      <li>
        <button
          onClick={() => {
            fnc();
          }}
        >
          {name}
        </button>
      </li>
    </nav>
  );
};

export default Nav;
