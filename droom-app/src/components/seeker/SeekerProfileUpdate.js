import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

const SeekerProfileUpdate = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  //   console.log(props);
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
      axiosWithAuth()
        .put("/seekers", values)
        .then(res => {
          console.log(res);
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          // console.log(err);
          setSubmitting(false);
        });
    }
  }
})(SeekerProfileUpdate);

// import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";

// const initialState = {
//   name: "",
//   location: "",
//   skills: "",
//   description: "",
// }

// const SeekerProfileUpdate = props => {
//   const [updateData, setUpdateData] = useState(initialState);

//   useEffect(() => {
//     const userToEdit = props.users.find(
//       user => `${user.id}` === props.match.params.id
//     );

//     if (userToEdit) setUpdateData(userToEdit);
//   }, [props.users, props.match.params.id]);

//   const changeHandler = ev => {
//     ev.persist();
//     setUpdateData({
//       ...updateData,
//       [ev.target.name]: ev.target.value
//     })
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .put(`/seekers/${updateData.id}`, updateData)
//       .then(res => {
//         console.log(res.data)
//         props.setUpdateData(res.data)
//         props.history.push(`/seekers/${updateData.id}`)
//       })
//       .catch( err => {
//         console.log(err)
//       })
//   }



//   return(
//     <div>
//       <form>

//         <button>Submit Update</button>
//       </form>
//     </div>
//   )
// }

// export default SeekerProfileUpdate;