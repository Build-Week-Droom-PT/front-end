import React, { useState } from "react";
import SeekerCreateProfile from "./SeekerCreateProfile";

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
    <PrivateRoute
      path="/item-list"
      render={props => {
        return (
          <SeekerCreateProfile
            {...props}
            jobSeeker={jobSeeker}
            firstName={jobSeeker.firstName}
            lastName={jobSeeker.lastName}
            email={jobSeeker.email}
            skills={jobSeeker.skills}
            location={jobSeeker.location}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      }}
    />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="username"
        placeholder="Please Select An Username"
        value={jobSeeker.username}
        onChange={handleChange}
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        value={jobSeeker.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
