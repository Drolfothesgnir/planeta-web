import React from "react";
import { Switch, Route } from "react-router";
import Main from "../../Pages/Main/Main";
import ThankYou from "../../Pages/ThankYou/ThankYou";
import NotFound from "../../Pages/NotFound/NotFound";
import { useLanguageState } from "../../../Store/Language/LanguageState";

export default function Routes() {
  const [{ contactForm }] = useLanguageState();
  return (
    <Switch>
      {contactForm && (
        <Route exact path="/thank-you">
          <ThankYou />
        </Route>
      )}
      <Route exact path="/">
        <Main />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
