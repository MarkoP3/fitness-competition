import React from "react";
import Row from "./Row/Row";

function Table({ competitors, saveHandler, winnerHandler }) {
  return (
    <table className="table bg-light col-md-10 col-xl-10 col-lg-10 col-12 m-auto">
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
          return (
            <Row
              winnerHandler={winnerHandler}
              saveHandler={saveHandler}
              competitor={competitor}
            ></Row>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
