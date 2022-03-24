import React from "react";
import { FaList } from "react-icons/fa";

export function Navbar() {
  return (
    <div id="navbar">
      <FaList className="icon" />
      <input type="text" placeholder="Search here" />
    </div>
  );
}
