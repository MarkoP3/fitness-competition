import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LeaderBoard from "../Components/LeaderBoard/LeaderBoard";
import LeaderBoardService from "../Services/LeaderBoardServices";
import Discipline from "../Components/Discipline/Discipline";
import CategoryService from "../Services/CategoryServices";
import LeaderBoardServices from "../Services/LeaderBoardServices";
function LeaderBoardCategoryContainer() {
  const [animatedID, setanimatedID] = useState(0);
  const [categories, setcategories] = useState([]);
  const [disciplines, setdisciplines] = useState([]);
  useEffect(() => {
    CategoryService.getAllCategories().then(async ({ data }) => {
      setcategories(data);
    });
    CategoryService.getAllDiscipline().then(({ data }) => {
      setdisciplines(data);
    });
  }, []);
  function changeAnimatedID(id) {
    setanimatedID(id);
    setTimeout(() => {
      setanimatedID(undefined);
    }, 1000);
  }
  return (
    <div>
      <Discipline disciplines={disciplines}></Discipline>
      <LeaderBoard
        LeaderBoardType="category"
        categories={categories}
        animatedID={animatedID}
      ></LeaderBoard>
    </div>
  );
}

export default LeaderBoardCategoryContainer;
