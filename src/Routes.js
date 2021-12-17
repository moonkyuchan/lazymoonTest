import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Global";
import Main from "./Pages/Main/Main";
import Signup from "./Pages/SignUp/Signup.tsx";
import Nav from "./Pages/Nav/Nav.tsx";

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
