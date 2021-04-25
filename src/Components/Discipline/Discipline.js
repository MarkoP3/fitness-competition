import React from "react";
import { Link } from "react-router-dom";

function Discipline({ disciplines }) {
  return (
    <div
      align="center"
      style={{ fontSize: "1.5vw" }}
      className="p-2 bg-dark mb-4"
    >
      {disciplines.map((discipline) => {
        return (
          <Link
            to={`/leaderboard/discipline/${discipline.toLowerCase()}`}
            class="btn btn-link bg-dark m-2 p-2"
          >
            {discipline}
          </Link>
        );
      })}
    </div>
  );
}

export default Discipline;
