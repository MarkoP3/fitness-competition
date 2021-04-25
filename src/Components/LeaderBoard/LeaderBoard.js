import React from "react";
import List from "./List/List";
import "./LeaderBoard.css";
function LeaderBoard({ categories, animatedID }) {
  return (
    <div className="row p-0 m-0">
      <div className="col-1"></div>
      {categories.map((category) => {
        return (
          <List
            title={category.name}
            rows={category.competitors}
            animatedID={animatedID}
          ></List>
        );
      })}
      <div className="col-1"></div>
    </div>
  );
}

export default LeaderBoard;
