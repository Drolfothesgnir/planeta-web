import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";

const Main = React.lazy(() => import("../../Pages/Main/Main"));
const ThankYou = React.lazy(() => import("../../Pages/ThankYou/ThankYou"));
const Portfolio = React.lazy(() => import("../../Pages/Portfolio/Portfolio"));

export default function Routes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/thank-you">
          <ThankYou />
        </Route>
        <Route exact path={"/node/3"}>
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </React.Suspense>
  );
}
