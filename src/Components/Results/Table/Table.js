import React from "react";
import Row from "./Row/Row";

function Table({ competitors, saveHandler, winnerHandler }) {
  return (
    <table className="table bg-light col-md-10 col-xl-10 col-lg-10 col-12 m-auto">
      <thead align="center">
        <tr>
          <th scope="col">Име и презиме</th>
          <th scope="col">Дисциплина</th>
          <th scope="col">Тип дисциплинe</th>
          <th scope="col">Категорија</th>
          <th scope="col">Резултат</th>
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
