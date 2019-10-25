import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";

import App from './App';
import LogIn from "./components/Forms/LogIn";
import SignUp from "./components/Forms/SignUp";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("App renders without crashing", () => {
  render(<App />)
}) 

test("contains Username and Password", () => {
  const { getByText } = render(<App/>);
  getByText(/username/i);
  getByText(/password/i);
}) ;

test("contains Log In and Sign Up", () => {
  render(<LogIn/>)
  render(<SignUp/>)
})