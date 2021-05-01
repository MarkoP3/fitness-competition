import React, { useEffect, useState } from "react";
import List from "./List/List";
import "./LeaderBoard.css";
function LeaderBoard({ categories, animatedID, LeaderBoardType }) {
  return (
    <div className="row p-0 m-0">
      <div className="col-1"></div>
      {categories.map((category) => {
        return (
          <List
            LeaderBoarType={LeaderBoardType}
            title={category.name}
            id={category.id}
            animatedID={animatedID}
          ></List>
        );
      })}
      <div className="col-1"></div>
    </div>
  );
}

export default LeaderBoard;
