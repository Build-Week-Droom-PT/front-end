import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SeekerNewUser = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  //   console.log(props);
  return (
    <div>
      <h1>Create An Account</h1>
      <Form className="form">
        <Field
          component="input"
          type="text"
          name="username"
          placeholder="User Name"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
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
        {/* <Field
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
        )} */}
        <label className="button">
          Terms and Conditions
          <Field
            component="input"
            type="checkbox"
            checked={values.terms}
            name="terms"
          />
          {touched.terms && errors.terms && (
            <p className="errors">{errors.terms}</p>
          )}
        </label>
        <button className="button" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({
    username,
    email,
    password,
    verifyPassword,
    terms
    // location,
    // skills,
    // description,
    // picture
  }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      terms: terms || false,
      // location: location || "",
      // skills: skills || "",
      // description: description || "",
      // picture: picture || "",
      isCompany: false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please Enter A Valid Email")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Required"),
    verifyPassword: Yup.string()
      .min(8, "Password must be 8 characters or longer and should match")
      .required("Required"),
    username: Yup.string().required("Required"),
    // location: Yup.string().required("Required"),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "Must Accept Terms and Conditions")
    // skills: Yup.string().required(),
    // description: Yup.string().required(),
    // upload: Yup.mixed()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.password !== values.verifyPassword) {
      setErrors({ verifyPassword: "Passwords do not match" });
      setSubmitting(false);
    } else {
      axios
        // https://droom-pt-bw.herokuapp.com/register
        .post("https://reqres.in/api/users", values)
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
  }
})(SeekerNewUser);
