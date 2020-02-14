import React from "react";
import Chat from "components/chat";
import { Route } from "react-router-dom";

function Home() {
  return <Route exact path={["", "/home"]} component={Chat} />;
}

export default Home;
