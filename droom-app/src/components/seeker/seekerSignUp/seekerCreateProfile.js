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
  };

  return (
    <input
      id="firstName"
      placeholder="First Name"
      value={jobSeeker.firstName}
    />
  );
}
