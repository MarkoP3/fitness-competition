import React from "react";

function CompetitorList({ handleDelete, competitors }) {
  return (
    <table className="col-12 bg-light table mt-3">
      <tr>
        <th>ИД</th>
        <th>Име</th>
        <th>Презиме</th>
        <th>Килажа</th>
        <th>Године</th>
        <th>Пол</th>
        <th>Категорија</th>
        <th></th>
      </tr>
      {competitors.map((competitor) => {
        return (
          <tr>
            <td>{competitor.id}</td>
            <td>{competitor.first_name}</td>
            <td>{competitor.last_name}</td>
            <td>{competitor.weight}</td>
            <td>{competitor.axe}</td>
            <td>{competitor.gender}</td>
            <td>{competitor.name}</td>
            <td>
              <button
                className="btn btn-dark"
                onClick={(e) => handleDelete(competitor.id)}
              >
                Избриши
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default CompetitorList;
