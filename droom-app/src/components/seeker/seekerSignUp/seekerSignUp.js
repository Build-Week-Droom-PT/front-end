import React, { useState } from "react";

export default function seekerSignUp() {
  const [jobSeeker, setJobSeeker] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    isCompany: false,
    firstName: "",
    lastName: "",
    skills: "",
    location: "",
    user_id: ""
  });

  const handleChange = e => {
    setJobSeeker({ ...jobSeeker, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(jobSeeker);
    //Thatcher adds to backend?
    /* reset the form: setJobSeeker({...jobSeeker, id: '',
        username: '',
        password: '',
        email: '',
        isCompany: false,
        firstName: '',
        lastName: '',
        skills: '',
        location: '',
        user_id: '',})*/
    <PrivateRoute path="/item-list" render={() => {}} />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="username"
        placeholder="Please Select An Username"
        value={jobSeeker.username}
        onChange={changeHandler}
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        value={jobSeeker.password}
        onChange={changeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
