import React from "react";

export default function SeekerCreateProfile({{...props},
  jobSeeker,
  firstName,
  lastName,
  email,
  skills,
  location,
  handleChange,
  handleSubmit}) {
 



  return (
    <form>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        value={firstName}
      />
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        value={lastName}
      />
      <input
        type="email"
        id="email"
        placeholder="email@example.com"
        value={email}
      />
      <input
        type="text"
        id="skills"
        placeholder="Skills"
        value={skills}
      />
      <input
        type="text"
        id="location"
        placeholder="City, State"
        value={location}
      />
    </form>
  );
}
