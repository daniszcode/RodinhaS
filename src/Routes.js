import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
