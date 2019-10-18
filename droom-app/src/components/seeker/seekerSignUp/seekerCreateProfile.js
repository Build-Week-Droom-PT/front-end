import React from "react";

export default function SeekerCreateProfile({
  props,
  jobSeeker,
  firstName,
  lastName,
  email,
  skills,
  location,
  handleChange,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        id="email"
        placeholder="email@example.com"
        value={email}
        onChange={handleChange}
      />
      <input
        type="text"
        id="skills"
        placeholder="Skills"
        value={skills}
        onChange={handleChange}
      />
      <input
        type="text"
        id="location"
        placeholder="City, State"
        value={location}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
