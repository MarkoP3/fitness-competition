import React from "react";

function Item({ id, name, points, animation }) {
  return (
    <li id={id} className={animation}>
      <mark>{name}</mark>
      <small>{points}</small>
    </li>
  );
}

export default Item;
