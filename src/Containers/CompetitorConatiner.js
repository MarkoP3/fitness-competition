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
    let dd = disciplinesAdded;

    if (disciplinesAdded.indexOf(discipline) != -1) {
      if (categories.find((el) => el.id == discipline).name == "ТОТАЛ") {
        const filtered = categories
          .filter((el) => el.type == "ОРМ")
          .map((e) => `${e.id}`);
        dd = dd.filter((e) => !filtered.includes(e));
      }
      dd = dd.filter((dis) => dis != discipline);
    } else {
      if (categories.find((el) => el.id == discipline).name == "ТОТАЛ") {
        dd = [
          ...disciplinesAdded,
          ...categories.filter((el) => el.type == "ОРМ").map((e) => `${e.id}`),
        ];
      }
      dd = [...dd, discipline];
    }

    setdisciplinesAdded(dd.filter(onlyUnique));
  }
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function saveCompetes() {
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
        disciplinesAdded={disciplinesAdded}
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
