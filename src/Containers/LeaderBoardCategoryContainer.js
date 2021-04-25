import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LeaderBoard from "../Components/LeaderBoard/LeaderBoard";
import LeaderBoardService from "../Services/LeaderBoardService";
import Discipline from "../Components/Discipline/Discipline";
import CategoryService from "../Services/CategoryServices";

function LeaderBoardCategoryContainer() {
  const [animatedID, setanimatedID] = useState(1);
  const [categories, setcategories] = useState([]);
  const [disciplines, setdisciplines] = useState([]);
  useEffect(() => {
    LeaderBoardService.getAllCategoriesWithCompetitors("").then((data) => {
      setcategories(data);
    });
    CategoryService.getAllDiscipline().then((data) => {
      setdisciplines(data);
    });
  }, []);
  return (
    <div>
      <Discipline disciplines={disciplines}></Discipline>
      <LeaderBoard
        categories={categories}
        animatedID={animatedID}
      ></LeaderBoard>
    </div>
  );
}

export default LeaderBoardCategoryContainer;
