import React from "react";

function Item({ showModal, itemData, animation, showKingModal, isKing }) {
  const { id, name, points } = itemData;
  return (
    <li onClick={(e) => showModal(itemData)} id={id} className={animation}>
      <mark>{name}</mark>

      <small>
        <img
          style={{ display: isKing ? "inline" : "none" }}
          onClick={(e) => {
            if (
              window.confirm(
                `Да ли сте сигурни да желите да прогласите ${name} као краља/краљицу?`
              )
            )
              showKingModal(itemData);
          }}
          src="/crownIcon.png"
          width="20px"
          className="mr-4"
        ></img>
        {points}
      </small>
    </li>
  );
}

export default Item;
