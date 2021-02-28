import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AddressAppBar from "../components/AddressAppBar";
import BottomNav from "../components/BottomNav";
import { Route, Switch } from "react-router-dom";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";
import { withRouter } from "react-router-dom";

function HomePage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AddressAppBar />
      <Container>
        <h1>Ho Halla</h1>
        <Switch>
          <Route path="/" exact>
            <PageOne />
          </Route>
          <Route exact path="/recents">
            <PageOne />
          </Route>
          <Route exact path="/favorites">
            <PageTwo />
          </Route>
          <Route exact path="/nearby">
            <PageThree />
          </Route>
        </Switch>
        <h1>Ho Halla</h1>
      </Container>
      <BottomNav />
    </React.Fragment>
  );
}

export default HomePage;
