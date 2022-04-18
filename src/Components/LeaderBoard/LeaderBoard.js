import React, { useState } from "react";
import List from "./List/List";
import "./LeaderBoard.css";
import ModalView from "../Modal/ModalView";
function LeaderBoard({
  categories,
  animatedID,
  LeaderBoardType,
  socket,
  changeAnimatedID,
}) {
  const [modalData, setmodalData] = useState({});
  const [isModalShown, setisModalShown] = useState(false);
  const [isKingModal, setisKingModal] = useState(false);
  function HideModalHandler() {
    setisModalShown(false);
    setisKingModal(false);
  }
  function ShowModalHandler(row) {
    setmodalData(row);
    setisModalShown(true);
  }
  function ShowKingModal(row) {
    ShowModalHandler(row);
    setisKingModal(true);
  }
  return (
    <>
      <div className="row p-0 m-0">
        {categories.map((category) => {
          return (
            <List
              showModal={ShowModalHandler}
              showKingModal={ShowKingModal}
              changeAnimatedID={changeAnimatedID}
              socket={socket}
              LeaderBoarType={LeaderBoardType}
              title={category.name}
              id={category.id}
              animatedID={animatedID}
            ></List>
          );
        })}
      </div>
      <ModalView
        data={modalData}
        hideModal={HideModalHandler}
        isShown={isModalShown}
        isKing={isKingModal}
      ></ModalView>
    </>
  );
}

export default LeaderBoard;
