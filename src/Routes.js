import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "./Pages/Login/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* <Route path="/sobre" component={Sobre} /> */}
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
