import React, { useState } from "react";
import Competes from "../Components/Competitor/Competes/Competes";
import Competitor from "../Components/Competitor/Competitor";
import CompetitorServices from "../Services/CompetitorServices";

function CompetitorConatiner() {
  const [categories, setcategories] = useState([]);
  const [competitor, setcompetitor] = useState(undefined);
  const [showcompetitor, setshowcompetitor] = useState(true);
  function AddCompetitor(fn, ln, gender, weight, age) {
    CompetitorServices.AddCompetitor(fn, ln, gender, weight, age).then(
      ({ data }) => {
        setcategories(data.categories);
        setcompetitor(data.competitor);
        setshowcompetitor(false);
      }
    );
  }
  return (
    <div className="p-5">
      <Competitor
        addCompetitorHandler={AddCompetitor}
        show={showcompetitor}
      ></Competitor>
      <Competes
        competitor={competitor}
        categories={categories}
        show={!showcompetitor}
      ></Competes>
    </div>
  );
}

export default CompetitorConatiner;
