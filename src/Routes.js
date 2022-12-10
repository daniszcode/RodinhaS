import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Page/Login/Login";
import { Home } from "./Page/Home/Home";
import { Ranking } from "./Page/Ranking/Ranking";
import { Map } from "./Page/Map/Map";
import { CadastroPage } from "./Page/Cadastro/Cadastro";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/map" component={Map} />
        <Route path="/cadastroPage" component={CadastroPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
