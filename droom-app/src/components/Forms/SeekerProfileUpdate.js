import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import axios from "axios";

const SeekerProfileUpdate = ({ errors, touched, isSubmitting }) => {
  return (
    <Form className="update-profile">
      <h1>Update Your Profile</h1>
      <Field
        className="shadow"
        component="input"
        type="text"
        name="name"
        placeholder="Full Name (optional)"
      />
      {touched.name && errors.name && <p className="errors">{errors.name}</p>}
      <Field
        className="shadow"
        component="input"
        type="email"
        name="email"
        placeholder="New email@example.com (optional)"
      />
      {touched.email && errors.email && (
        <p className="errors">{errors.email}</p>
      )}
      <Field
        className="shadow"
        component="input"
        type="password"
        name="password"
        placeholder="New Password (optional)"
      />
      {touched.password && errors.password && (
        <p className="errors">{errors.password}</p>
      )}
      <Field
        className="shadow"
        component="input"
        type="password"
        name="verifyPassword"
        placeholder="Verify Password"
      />
      {touched.verifyPassword && errors.verifyPassword && (
        <p className="errors">{errors.verifyPassword}</p>
      )}
      <Field
        className="shadow"
        component="input"
        type="text"
        name="local"
        placeholder="New City, State (optional)"
      />
      {touched.local && errors.local && (
        <p className="errors">{errors.local}</p>
      )}
      <Field
        className="shadow"
        component="input"
        type="text"
        name="skills"
        placeholder="New Skills (optional)"
      />
      {touched.skills && errors.skills && (
        <p className="errors">{errors.skills}</p>
      )}
      <Field
        className="shadow"
        component="input"
        type="text"
        name="description"
        placeholder="New Description (optional)"
      />
      {touched.description && errors.description && (
        <p className="errors">{errors.description}</p>
      )}
      <Field className="shadow" component="input" type="file" name="picture" />
      {touched.picture && errors.picture && (
        <p className="errors">{errors.picture}</p>
      )}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({
    name,
    email,
    password,
    verifyPassword,
    local,
    skills,
    description,
    picture
  }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      local: local || "",
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
    // if (values.password !== values.verifyPassword) {
    //   setErrors({ verifyPassword: "Passwords do not match" });
    //   setSubmitting(false);
    // } else {
    //   axios
    //     .put(`https://droom-pt-bw.herokuapp.com/seekers`, values)
    //     .then(res => {
    //       resetForm();
    //       setSubmitting(false);
    //     })
    //     .catch(err => {
    //       setSubmitting(false);
    //     });
    // }
    resetForm();
    //hacky workaround to make app appear to function since there are backend problems
    window.location.href = `/seekers/1`;
  }
})(SeekerProfileUpdate);
