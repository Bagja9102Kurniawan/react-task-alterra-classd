import Home from "./Home";

import Contact from "./Contact";
import Success from "./Success";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/thankyou" component={Success} />
      </Switch>
    </div>
  );
};
