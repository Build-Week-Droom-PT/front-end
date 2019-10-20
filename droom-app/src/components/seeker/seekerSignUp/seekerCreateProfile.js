// // import React from "react";

// // export default function SeekerCreateProfile({
// //   props,
// //   jobSeeker,
// //   firstName,
// //   lastName,
// //   email,
// //   skills,
// //   location,
// //   handleChange,
// //   handleSubmit
// // }) {
// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         id="firstName"
// //         placeholder="First Name"
// //         value={firstName}
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="text"
// //         id="lastName"
// //         placeholder="Last Name"
// //         value={lastName}
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="email"
// //         id="email"
// //         placeholder="email@example.com"
// //         value={email}
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="text"
// //         id="skills"
// //         placeholder="Skills"
// //         value={skills}
// //         onChange={handleChange}
// //       />
// //       <input
// //         type="text"
// //         id="location"
// //         placeholder="City, State"
// //         value={location}
// //         onChange={handleChange}
// //       />
// //       <button className="button" type="submit">
// //         Submit
// //       </button>
// //     </form>
// //   );
// // }

// import React from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import styled from "styled-components";
// import { Button } from "reactstrap";

// const Onboarding = ({
//   errors,
//   touched,
//   isSubmitting,
//   isValidating,
//   values
// }) => {
//   const FormStyling = styled.div`
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: space-evenly;
//     align-content: space-between;
//     width: 50%;
//     min-height: 80vh;
//     max-height: 90vh;
//     padding: 2%;
//     margin: 2% auto;
//     border: 1px solid red;
//     font-size: 1.8rem;
//   `;

//   //   console.log(props);
//   return (
//     <Form>
//       <FormStyling>
//         <Field
//           component="input"
//           type="text"
//           name="name"
//           placeholder="Full Name"
//         />
//         {touched.name && errors.name && <p className="errors">{errors.name}</p>}
//         <Field
//           component="input"
//           type="email"
//           name="email"
//           placeholder="email@example.com"
//         />
//         {touched.email && errors.email && (
//           <p className="errors">{errors.email}</p>
//         )}

//         <Field
//           component="input"
//           type="password"
//           name="password"
//           placeholder="Password"
//         />
//         {touched.password && errors.password && (
//           <p className="errors">{errors.password}</p>
//         )}
//         <Field
//           component="input"
//           type="password"
//           name="verifyPassword"
//           placeholder="Verify Password"
//         />
//         {touched.verifyPassword && errors.verifyPassword && (
//           <p className="errors">{errors.verifyPassword}</p>
//         )}
//         <Field
//           component="input"
//           type="textarea"
//           name="skills"
//           placeholder="Skills"
//         />
//         {touched.skills && errors.skills && (
//           <p className="errors">{errors.skills}</p>
//         )}
//         <Field
//           component="input"
//           type="text"
//           name="location"
//           placeholder="Location"
//         />
//         {touched.location && errors.location && (
//           <p className="errors">{errors.location}</p>
//         )}
//         <Field
//           component="input"
//           type="image"
//           name="pic"
//           placeholder="Upload A Picture"
//         />
//         {touched.image && errors.image && (
//           <p className="errors">{errors.image}</p>
//         )}

//         <label className="button">
//           Terms and Conditions
//           <Field
//             component="input"
//             type="checkbox"
//             checked={values.term}
//             name="terms"
//           />
//           {touched.term && errors.term && (
//             <p className="errors">{errors.term}</p>
//           )}
//         </label>
//         <Button type="submit" disabled={isSubmitting}>
//           Submit
//         </Button>
//       </FormStyling>
//     </Form>
//   );
// };

// export default withFormik({
//   mapPropsToValues({
//     name,
//     email,
//     password,
//     verifyPassword,
//     terms,
//     skills,
//     location,
//     image,
//     term
//   }) {
//     return {
//       name: name || "",
//       email: email || "",
//       password: password || "",
//       verifyPassword: verifyPassword || "",
//       terms: terms || false,
//       skills: skills || "",
//       location: location || "",
//       image: image || "",
//       term: term || false
//     };
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string()
//       .email("Please Enter A Valid Email")
//       .required("Required"),
//     password: Yup.string()
//       .min(8, "Password must be 8 characters or longer")
//       .required("Required"),
//     verifyPassword: Yup.string()
//       .min(8, "Password must be 8 characters or longer and should match")
//       .required("Required"),
//     name: Yup.string().required("Required"),
//     term: Yup.boolean()
//       .required("Required")
//       .oneOf([true], "Must Accept Terms and Conditions"),
//     skills: Yup.string().required(),
//     location: Yup.string().required(),
//     pic: Yup.mixed()
//   }),
//   handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//     // if (values.email !== "waffle@syrup.com") {
//     //   setErrors({ email: "That email is already taken" });
//     //   setSubmitting(false);
//     // }
//     if (values.password !== values.verifyPassword) {
//       setErrors({ verifyPassword: "Passwords do not match" });
//       setSubmitting(false);
//     } else {
//       axios
//         .post("https://reqres.in/api/users", values)
//         .then(res => {
//           console.log(res);
//           resetForm();
//           setSubmitting(false);
//         })
//         .catch(err => {
//           console.log(err);
//           setSubmitting(false);
//         });
//     }
//   }
// })(Onboarding);

import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SeekerCreateProfile = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  //   console.log(props);
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
        {/* {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="email@example.com"
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )} */}
        {/* <Field
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
        /> */}
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
        {/* <label className="button">
          Terms and Conditions
          <Field
            component="input"
            type="checkbox"
            checked={values.terms}
            name="terms"
            placeholder="Full Name"
          />
          {touched.terms && errors.terms && (
            <p className="errors">{errors.terms}</p>
          )}
        </label> */}
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
    // email,
    // password,
    // verifyPassword,
    // terms,
    location,
    skills,
    description,
    picture
  }) {
    return {
      name: name || "",
      // email: email || "",
      // password: password || "",
      // verifyPassword: verifyPassword || "",
      // terms: terms || false,
      location: location || "",
      skills: skills || "",
      description: description || "",
      picture: picture || ""
    };
  },
  validationSchema: Yup.object().shape({
    // email: Yup.string()
    //   .email("Please Enter A Valid Email")
    //   .required("Required"),
    // password: Yup.string()
    //   .min(8, "Password must be 8 characters or longer")
    //   .required("Required"),
    // verifyPassword: Yup.string()
    //   .min(8, "Password must be 8 characters or longer and should match")
    //   .required("Required"),
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
    if (values.password !== values.verifyPassword) {
      setErrors({ verifyPassword: "Passwords do not match" });
      setSubmitting(false);
    } else {
      axios
        // https://droom-pt-bw.herokuapp.com/seekers
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
})(SeekerCreateProfile);
