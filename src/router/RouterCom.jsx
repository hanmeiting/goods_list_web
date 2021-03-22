import { Switch, Route } from "react-router-dom";
import routerList from "./index";
export default function RouterCom(props) {
  return (
    <Switch>
      {routerList.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={route.render}
          ></Route>
        );
      })}
    </Switch>
  );
}
