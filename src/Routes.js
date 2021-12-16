import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import { Ranking } from "./Pages/Ranking/Ranking";
import { Map } from "./Pages/Map/Map";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/map" component={Map} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
