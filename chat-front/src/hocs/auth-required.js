import React from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const path = ["/registration", "/login"];

function AuthRequired({ children, user }) {
  const history = useHistory();

  return !user && !path.includes(history.location.pathname) ? (
    <Redirect
      to={{
        pathname: "/login",
        state: { nextPathname: history.location.pathname }
      }}
    ></Redirect>
  ) : (
    <>{children}</>
  );
}

const mapStateToProps = ({ authReducer }) => {
  return { user: authReducer.user };
};

export default connect(mapStateToProps)(AuthRequired);
