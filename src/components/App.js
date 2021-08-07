import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout/Layout";

export default function App() {
  // global

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <PublicRoute path="/" component={Layout} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  
  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          
            React.createElement(component, props)
          
        }
      />
    );
  }
}
