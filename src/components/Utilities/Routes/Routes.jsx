import React from "react";
import { Switch, Route } from "react-router";
import Main from "../../Pages/Main/Main";
import ThankYou from "../../Pages/ThankYou/ThankYou";
import NotFound from "../../Pages/NotFound/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/thank-you">
        <ThankYou />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
