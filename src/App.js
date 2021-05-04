import "./App.css";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import LeaderBoardCategoryContainer from "./Containers/LeaderBoardCategoryContainer";
import LeaderBoardSpecificCategoryContainer from "./Containers/LeaderBoardSpecificCategoryContainer";
import CompetitorConatiner from "./Containers/CompetitorConatiner";
import ResultsContainer from "./Containers/ResultsContainer";
import socketIOClient from "socket.io-client";
const socket = socketIOClient(process.env.REACT_APP_SOCKET_IO);
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/leaderboard/category">
          <LeaderBoardCategoryContainer
            socket={socket}
          ></LeaderBoardCategoryContainer>
        </Route>
        <Route path="/leaderboard/discipline/:disciplineID">
          <LeaderBoardSpecificCategoryContainer
            socket={socket}
          ></LeaderBoardSpecificCategoryContainer>
        </Route>

        <Route path="/competitors">
          <CompetitorConatiner></CompetitorConatiner>
        </Route>
        <Route path="/results">
          <ResultsContainer socket={socket}></ResultsContainer>
        </Route>
        <Route path="/">
          <Redirect to="/leaderboard/category"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
