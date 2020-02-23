import React from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const path = ["/registration", "/login"];

function NoAuthRequired({ children, user }) {
  const history = useHistory();

  return user && path.includes(history.location.pathname) ? (
    <Redirect
      to={{
        pathname: "/home",
        state: { nextPathname: history.location.pathname }
      }}
    />
  ) : (
    <>{children}</>
  );
}

const mapStateToProps = ({ authReducer }) => {
  return { user: authReducer.user };
};

export default connect(mapStateToProps)(NoAuthRequired);