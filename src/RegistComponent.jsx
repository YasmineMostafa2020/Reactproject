import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import FormikField from "./Formikfield";
const Register = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    hopies: [""],
  };
  const onSubmit = (values) => console.log(values);
  const validationSchema = yup.object({
    userName: yup.string().required(),
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    gender: yup.string().required(),
  });

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
              <>
            <div className="text-start mt-5 ms-5">
              <FormikField label="User Name" name="userName" type="text" />
              <FormikField label="E-mail" name="email" type="text" />
              <FormikField label="Password" name="password" type="password" />
              <FormikField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <Field name="gender">
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="gender" style={{ display: "block" }}>
                        Gender
                      </label>
                      <select id="gender" {...formikField.field}>
                        <option value="" label="Choose your gender" />
                        <option value="male" label="Male" />
                        <option value="female" label="Female" />
                      </select>
                      <ErrorMessage name="gender">
                        {(errMessage) => {
                          return (
                            <div style={{ color: "red" }}>{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                    </>
                  );
                }}
              </Field>
              <FieldArray name="hopies">
                {(fieldArrayProps) => {
                  console.log("FieldArray", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { hopies } = values;
                  return (
                    <>
                      <label htmlFor="hopies" style={{ display: "block" }}>
                        Hoppies
                      </label>
                      {hopies.map((hopy, index) => (
                        <div key={index}>
                          <Field name={`hopies[${index}]`} />
                          {index > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => remove(index)}
                            >
                             delete
                            </button>
                          )}
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => push("")}
                          >
                           Add
                          </button>
                        </div>
                      ))}
                    </>
                  );
                }}
              </FieldArray>
              <button className=" btn btn-danger d-block mt-2">Submit</button>
            </div>
            </>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Register;
