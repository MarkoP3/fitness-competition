import React, { useEffect, useState } from "react";

function Row({ competitor, saveHandler }) {
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
    </tr>
  );
}

export default Row;
