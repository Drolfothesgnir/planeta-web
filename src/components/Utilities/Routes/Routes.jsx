import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";

const Main = React.lazy(() => import("../../Pages/Main/Main"));
const ThankYou = React.lazy(() => import("../../Pages/ThankYou/ThankYou"));
const Portfolio = React.lazy(() => import("../../Pages/Portfolio/Portfolio"));
const OschadPortfolio = React.lazy(() =>
  import("../../Pages/Portfolio/PortfolioCases/OschadPortfolio/OschadPortfolio")
);
const About = React.lazy(() => import("../../Pages/About/About"));

export default function Routes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/thank-you">
          <ThankYou />
        </Route>
        <Route path={"/about-us"} component={About} />
        <Route
          path={"/portfolio/apple-pay-oschadbank"}
          component={OschadPortfolio}
        />
        <Route exact path={"/portfolio"} component={Portfolio} />
        <Route exact path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
}
