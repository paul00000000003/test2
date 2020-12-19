import React from "react";
import Home from "./Home";
import FirstPage from "./FirstPage";
//import SecondPage from "./SecondPage";
//import ThirdPage from "./ThirdPage";
//import FourthPage from "./FourthPage";
import { Route, useHistory, Switch } from "react-router-dom";
// Styles

function App() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  function handleClick2() {
    history.push("/firstPage");
  }

  //function handleChange(e) {
  //  console.log(e.target.value);
  //  history.push("/" + e.target.value);
  //}

  //<Link to="/home">Home</Link>

  //<option value="thirdPage">third page</option>
  //<option value="fourthPage">fourth page</option>
  //</Select>
  //<Route path="/secondPage">
  //<SecondPage />
  //</Route>
  //<Route path="/thirdPage">
  //<ThirdPage />
  //</Route>
  //<Route path="/fourthPage">
  //<FourthPage />
  //</Route>

  return (
    <div>
      <form>
        <button onClick={handleClick}>Go home</button>
        <button onClick={handleClick2}>Go first page</button>
      </form>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/firstPage">
          <FirstPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
