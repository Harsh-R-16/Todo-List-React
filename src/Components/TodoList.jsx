import React from "react";

export function TodoList({ todos, deleteHandler, editHandler }) {
  return (
    <article>
      {todos.map((item, index) => (
        <div key={index} id={index}>
          <p>
            <span>{index + 1}:</span> {item}
          </p>
          <i className="fa fa-edit" onClick={editHandler}></i>
          <i className="fa fa-trash" onClick={deleteHandler}></i>
        </div>
      ))}
    </article>
  );
}
