import React, { useEffect, useState } from "react";
import Results from "../Components/Results/Results";
import CompetitorServices from "../Services/CompetitorServices";
function ResultsContainer({ socket }) {
  const [competitors, setcompetitors] = useState([]);
  function handleSearch(filter) {
    CompetitorServices.SearchCompetitor(filter).then(({ data }) => {
      setcompetitors(data);
      socket.on("refresh", (data) => {
        CompetitorServices.SearchCompetitor(filter).then(({ data }) => {
          setcompetitors(data);
        });
      });
    });
  }
  function handleSave(competesID, result, competitor) {
    CompetitorServices.changeCompetes(competesID, result, competitor);
  }
  function declareWinner(competesID, place) {
    CompetitorServices.declareOnPosition(competesID, place);
  }

  return (
    <Results
      competitors={competitors}
      searchHandler={handleSearch}
      saveHandler={handleSave}
      winnerHandler={declareWinner}
    ></Results>
  );
}

export default ResultsContainer;
