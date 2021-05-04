import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Discipline from "../Components/Discipline/Discipline";
import LeaderBoard from "../Components/LeaderBoard/LeaderBoard";
import CategoryService from "../Services/CategoryServices";

function LeaderBoardSpecificCategoryContainer({ socket }) {
  const [animatedID, setanimatedID] = useState(-1);
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
      setanimatedID(-1);
    }, 1000);
  }
  return (
    <div>
      <Discipline disciplines={disciplines}></Discipline>
      <LeaderBoard
        changeAnimatedID={changeAnimatedID}
        socket={socket}
        LeaderBoardType={"discipline"}
        animatedID={animatedID}
        categories={categories}
      ></LeaderBoard>
    </div>
  );
}

export default LeaderBoardSpecificCategoryContainer;
