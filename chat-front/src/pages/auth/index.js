import React from "react";
import Login from "modules/login";
import "./style.scss";
import Registration from "modules/registration";
import { Route } from "react-router-dom";

function Auth() {
  return (
    <Route exact path={["/registration", "/login"]}>
      <div className="auth">
        <div className="auth-container">
          <Route exact path={"/login"} component={Login} />
          <Route exact path="/registration" component={Registration} />
        </div>
      </div>
    </Route>
  );
}

export default Auth;
