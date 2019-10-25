import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SeekerProfileUpdate = ({ errors, touched, isSubmitting }) => {
  return (
    <div>
      <h1>Update Your Profile</h1>
      <Form className="form">
        <Field
          component="input"
          type="text"
          name="name"
          placeholder="Full Name"
        />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="email@example.com"
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Field
          component="input"
          type="password"
          name="verifyPassword"
          placeholder="Verify Password"
        />
        {touched.verifyPassword && errors.verifyPassword && (
          <p className="errors">{errors.verifyPassword}</p>
        )}
        <Field
          component="input"
          type="text"
          name="location"
          placeholder="City, State"
        />
        {touched.location && errors.location && (
          <p className="errors">{errors.location}</p>
        )}
        <Field
          component="input"
          type="text"
          name="skills"
          placeholder="Skills"
        />
        {touched.skills && errors.skills && (
          <p className="errors">{errors.skills}</p>
        )}
        <Field
          component="input"
          type="text"
          name="description"
          placeholder="Description"
        />
        {touched.description && errors.description && (
          <p className="errors">{errors.description}</p>
        )}
        <Field
          component="input"
          type="file"
          name="picture"
          placeholder="Upload A Picture"
        />
        {touched.picture && errors.picture && (
          <p className="errors">{errors.picture}</p>
        )}
        <button className="button" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({
    name,
    email,
    password,
    verifyPassword,
    location,
    skills,
    description,
    picture
  }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      location: location || "",
      skills: skills || "",
      description: description || "",
      picture: picture || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Please Enter A Valid Email"),
    password: Yup.string().min(8, "Password must be 8 characters or longer"),
    verifyPassword: Yup.string().min(
      8,
      "Password must be 8 characters or longer and should match"
    ),
    name: Yup.string(),
    location: Yup.string(),
    skills: Yup.string(),
    description: Yup.string(),
    upload: Yup.mixed()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.password !== values.verifyPassword) {
      setErrors({ verifyPassword: "Passwords do not match" });
      setSubmitting(false);
    } else {
      axios

        .put("https://droom-pt-bw.herokuapp.com/seekers", values)
        .then(res => {
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          setSubmitting(false);
        });
    }
  }
})(SeekerProfileUpdate);
