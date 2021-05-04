import React, { useEffect, useState } from "react";
import Competes from "../Components/Competitor/Competes/Competes";
import Competitor from "../Components/Competitor/Competitor";
import CompetitorServices from "../Services/CompetitorServices";

function CompetitorConatiner() {
  const [categories, setcategories] = useState([]);
  const [competitor, setcompetitor] = useState(undefined);
  const [showcompetitor, setshowcompetitor] = useState(true);
  const [disciplinesAdded, setdisciplinesAdded] = useState([]);
  const [totalAdded, settotalAdded] = useState(false);
  function AddCompetitor(fn, ln, gender, weight, age) {
    CompetitorServices.AddCompetitor(fn, ln, gender, weight, age).then(
      ({ data }) => {
        setcategories(data.categories);
        setcompetitor(data.competitor);
        setshowcompetitor(false);
      }
    );
  }
  function AddDiscipline(discipline) {
    console.log(categories.find((el) => el.id == discipline).name);
    if (disciplinesAdded.indexOf(discipline) != -1)
      setdisciplinesAdded(disciplinesAdded.filter((dis) => dis != discipline));
    else setdisciplinesAdded([...disciplinesAdded, discipline]);
  }
  function saveCompetes() {
    console.log(`disciplinesAdded`, disciplinesAdded);
    if (disciplinesAdded.length > 0)
      CompetitorServices.AddCompetes(disciplinesAdded, competitor).then(
        (data) => {
          setshowcompetitor(true);
          setdisciplinesAdded([]);
        }
      );
    else alert("Competitor needs to compete at least in one discipline!");
  }
  return (
    <div className="p-5">
      <Competitor
        addCompetitorHandler={AddCompetitor}
        show={showcompetitor}
      ></Competitor>
      <Competes
        AddDiscipline={AddDiscipline}
        saveCompetes={saveCompetes}
        competitor={competitor}
        categories={categories}
        show={!showcompetitor}
      ></Competes>
    </div>
  );
}

export default CompetitorConatiner;
