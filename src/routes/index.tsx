import React, { useReducer } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import TrendingContainer from "../pages/TrendingContainer";
import * as RoutePath from "./constants";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RoutePath.ROOT}>
          <Redirect to={RoutePath.TRENDING} />
        </Route>
        <Route  path={RoutePath.TRENDING}>
          <TrendingContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
