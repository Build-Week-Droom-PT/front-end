import React from "react";
import LogIn from "../Forms/LogIn";

export default function HomePage(props) {
  console.log(props);
  console.log(`Props from the HomePage: ${props}`);
  return (
    <div className="page-color">
      <h1> HomePage</h1>
      <LogIn />
    </div>
  );
}
