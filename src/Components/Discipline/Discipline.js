import React from "react";
import { NavLink } from "react-router-dom";

function Discipline({ disciplines }) {
  return (
    <div
      align="center"
      style={{ fontSize: "1.5vw" }}
      className="p-2 bg-dark mb-4"
    >
      <span className="btn btn-link bg-dark m-2 p-2">
        <NavLink to={`/leaderboard/category`}>Бодови</NavLink>
      </span>
      {disciplines.map(({ discipline, name, id }) => {
        return (
          <span class="btn btn-link bg-dark m-2 p-2">
            <NavLink to={`/leaderboard/discipline/${id}`}>
              {`${discipline}-${name}`}
            </NavLink>
          </span>
        );
      })}
    </div>
  );
}

export default Discipline;
