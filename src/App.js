import "./App.css";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import LeaderBoardCategoryContainer from "./Containers/LeaderBoardCategoryContainer";
import LeaderBoardSpecificCategoryContainer from "./Containers/LeaderBoardSpecificCategoryContainer";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/leaderboard/category">
          <LeaderBoardCategoryContainer></LeaderBoardCategoryContainer>
        </Route>
        <Route path="/leaderboard/discipline/:disciplineID">
          <LeaderBoardSpecificCategoryContainer></LeaderBoardSpecificCategoryContainer>
        </Route>
        <Route path="/">
          <Redirect to="/leaderboard/category"></Redirect>
        </Route>
        <Route path="/competitors"></Route>
        <Route path="/results"></Route>
      </Switch>
    </Router>
  );
}

export default App;
