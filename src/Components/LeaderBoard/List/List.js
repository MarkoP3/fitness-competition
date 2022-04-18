import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LeaderBoardServices from "../../../Services/LeaderBoardServices";
import Item from "./Item/Item";

function List({
  showKingModal,
  showModal,
  title,
  animatedID,
  id,
  LeaderBoarType,
  socket,
  changeAnimatedID,
}) {
  const { disciplineID } = useParams();
  const [rows, setrows] = useState([]);
  useEffect(() => {
    if (LeaderBoarType == "category")
      LeaderBoardServices.getAllCompetitorsOfCategory(id).then(({ data }) => {
        setrows(data);
        console.log("data", data);
      });
    else
      LeaderBoardServices.getAllCompetitorsOfDiscipline(id, disciplineID).then(
        ({ data }) => {
          setrows(data);
          console.log("data", data);
        }
      );
    socket.on("refresh", (competitor) => {
      if (LeaderBoarType == "category")
        LeaderBoardServices.getAllCompetitorsOfCategory(id).then(({ data }) => {
          setrows(data);
          changeAnimatedID(competitor);
        });
      else
        LeaderBoardServices.getAllCompetitorsOfDiscipline(
          id,
          window.location.pathname.split("/")[3]
        ).then(({ data }) => {
          setrows(data);
          changeAnimatedID(competitor);
        });
    });
  }, []);
  useEffect(() => {
    if (LeaderBoarType == "category")
      LeaderBoardServices.getAllCompetitorsOfCategory(id).then(({ data }) => {
        setrows(data);
      });
    else
      LeaderBoardServices.getAllCompetitorsOfDiscipline(id, disciplineID).then(
        ({ data }) => {
          setrows(data);
        }
      );
    socket.on("refresh", (competitor) => {
      if (LeaderBoarType == "category")
        LeaderBoardServices.getAllCompetitorsOfCategory(id).then(({ data }) => {
          setrows(data);
          changeAnimatedID(competitor);
        });
      else
        LeaderBoardServices.getAllCompetitorsOfDiscipline(
          id,
          window.location.pathname.split("/")[3]
        ).then(({ data }) => {
          setrows(data);
          changeAnimatedID(competitor);
        });
    });
  }, [disciplineID]);
  return (
    <div className="col-lg-2 col-12">
      <div className="leaderboard">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              fill: "#fa6855",
              marginBottom: "-5px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <path d="M5 0c0 9.803 5.105 12.053 5.604 16h2.805c.497-3.947 5.591-6.197 5.591-16h-14zm7.006 14.62c-.408-.998-.969-1.959-1.548-2.953-1.422-2.438-3.011-5.162-3.379-9.667h9.842c-.368 4.506-1.953 7.23-3.372 9.669-.577.993-1.136 1.954-1.543 2.951zm-.006-3.073c-1.125-2.563-1.849-5.599-1.857-8.547h-1.383c.374 3.118 1.857 7.023 3.24 8.547zm12-9.547c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076zm-24 0c.372 4.105 2.808 8.091 6.873 9.438-.297-.552-.596-1.145-.882-1.783-2.915-1.521-4.037-4.25-4.464-6.251h2.688c-.058-.449-.102-.922-.138-1.404h-4.077zm13.438 15h-2.866c-.202 1.187-1.63 2.619-3.571 2.619v4.381h10v-4.381c-1.999 0-3.371-1.432-3.563-2.619zm2.562 6h-8v-2h8v2z" />
          </svg>
          {title}
        </h1>
        <ol>
          {rows.map((row) => {
            return (
              <Item
                isKing={row?.maxPoints == row?.points && row?.points > 0}
                showKingModal={showKingModal}
                showModal={showModal}
                itemData={row}
                animation={animatedID == row.id ? "animated fadeInUpBig" : ""}
              ></Item>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default List;
