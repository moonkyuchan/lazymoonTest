import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Global";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Nav/Nav.tsx";
import News from "./Pages/News/News.tsx";
import Profile from "./Pages/Profile/Profile.tsx";

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
