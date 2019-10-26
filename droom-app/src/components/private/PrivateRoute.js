import React from "react";
import { Route, Redirect } from "react-router-dom";
import SeekerHeader from "../Header/SeekerHeader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return (
            <>
              <SeekerHeader />
              <Component {...props} />
            </>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
