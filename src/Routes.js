import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import { Ranking } from "./Pages/Ranking/Ranking";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
