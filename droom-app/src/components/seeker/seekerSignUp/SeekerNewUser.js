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
        <label className="button">
          Are You an Employer?
          <Field
            component="input"
            type="checkbox"
            checked={values.company}
            name="company"
          />
          {touched.company && errors.company && (
            <p className="errors">{errors.company}</p>
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
  mapPropsToValues({ username, email, password, verifyPassword, company }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      company: company || false,
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
    company: Yup.boolean()
      .required("Required")
      .oneOf([true], "Must Accept company and Conditions")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.password !== values.verifyPassword) {
      setErrors({ verifyPassword: "Passwords do not match" });
      setSubmitting(false);
    } else {
      axios
        .post("https://droom-pt-bw.herokuapp.com/register", values)
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
