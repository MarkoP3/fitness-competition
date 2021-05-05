import React, { useEffect, useState } from "react";

function Row({ competitor, saveHandler, winnerHandler }) {
  console.log(`competitor`, competitor);
  const [value, setvalue] = useState(0);
  useEffect(() => {
    setvalue(competitor.quantity);
  }, []);
  useEffect(() => {
    setvalue(competitor.quantity);
  }, [competitor]);

  return (
    <tr>
      <td>{competitor.name}</td>
      <td>{competitor.discipline}</td>
      <td>{competitor.type}</td>
      <td>{competitor.category}</td>
      <td>
        <input
          type="number"
          value={value}
          onChange={(e) => setvalue(e.currentTarget.value)}
        />
      </td>
      <td>
        <input
          type="button"
          className="btn btn-success"
          value="Save"
          onClick={(e) => saveHandler(competitor.compID, value, competitor.id)}
        />
      </td>
      <td>
        <button
          className={`btn ${
            competitor.place == competitor.place1 ? "btn-success " : "btn-dark "
          } rounded-0 border-right`}
          onClick={(e) => {
            winnerHandler(competitor.compID, 1);
          }}
        >
          1st
        </button>

        <button
          className={`btn ${
            competitor.place == competitor.place2 ? "btn-success" : "btn-dark"
          } rounded-0 border-right`}
          onClick={(e) => {
            winnerHandler(competitor.compID, 2);
          }}
        >
          2nd
        </button>

        <button
          className={`btn ${
            competitor.place == competitor.place3 ? "btn-success" : "btn-dark"
          } rounded-0 border-right`}
          onClick={(e) => {
            winnerHandler(competitor.compID, 3);
          }}
        >
          3rd
        </button>
      </td>
    </tr>
  );
}

export default Row;
