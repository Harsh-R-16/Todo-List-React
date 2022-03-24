import React from "react";

export function Header({ text, clc }) {
  console.log(text, clc);
  return (
    <>
      <p id="alert-para" className={`alert alert-${clc}`} role="alert">
        {text}
      </p>
      <h1>To-Do List</h1>
    </>
  );
}
