import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AddressAppBar from "../components/AddressAppBar";
import BottomNav from "../components/BottomNav";
import PageOne from "../components/PageOne";
import PageThree from "../components/PageThree";
import PageTwo from "../components/PageTwo";

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
