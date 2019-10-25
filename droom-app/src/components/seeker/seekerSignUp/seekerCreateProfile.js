import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SeekerCreateProfile = ({ errors, touched, isSubmitting }) => {
  return (
    <div>
      <h1>Create a Profile</h1>
      <Form className="form">
        <Field
          component="input"
          type="text"
          name="name"
          placeholder="Full Name"
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
  mapPropsToValues({ name, location, skills, description, picture }) {
    return {
      name: name || "",
      location: location || "",
      skills: skills || "",
      description: description || "",
      picture: picture || "",
      user_id: Date.now()
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "Must Accept Terms and Conditions"),
    skills: Yup.string().required(),
    description: Yup.string().required(),
    picture: Yup.mixed()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://droom-pt-bw.herokuapp.com/seekers`;
    axios
      .post(proxy + url, values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(SeekerCreateProfile);
