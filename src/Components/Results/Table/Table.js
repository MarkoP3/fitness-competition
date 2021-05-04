import React from "react";
import Row from "./Row/Row";

function Table({ competitors, saveHandler }) {
  return (
    <table className="table bg-light w-75 m-auto">
      <thead align="center">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Discipline</th>
          <th scope="col">Discipline type</th>
          <th scope="col">Category</th>
          <th scope="col">Result</th>
          <th></th>
        </tr>
      </thead>
      <tbody align="center">
        {competitors.map((competitor) => {
          return <Row saveHandler={saveHandler} competitor={competitor}></Row>;
        })}
      </tbody>
    </table>
  );
}

export default Table;
