import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Global";
// import App from "./App";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/">Not Fonund</Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
