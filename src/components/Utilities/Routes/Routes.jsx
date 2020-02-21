import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";
import {useContentState} from "../../../Store/Content/store";
import {useLanguageState} from "../../../Context/language";
import {routeMap} from "../../../utilities/routeMap";

const Main = React.lazy(() => import("../../Pages/Main/Main"));
const ThankYou = React.lazy(() => import("../../Pages/ThankYou/ThankYou"));
const Portfolio = React.lazy(() => import('../../Pages/Portfolio/Portfolio'));

export default function Routes() {
  const [{mainMenu}] = useContentState();
  let portfolioRoute = '/portfolio';
  const [lang] = useLanguageState();
  const menu = mainMenu && mainMenu[lang];
  if (menu) {
     portfolioRoute = menu[routeMap.portfolio].relative;
  }
  return menu ? (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/thank-you">
          <ThankYou />
        </Route>
        <Route exact path={portfolioRoute}>
          <Portfolio/>
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </React.Suspense>
  ) : null;
}
