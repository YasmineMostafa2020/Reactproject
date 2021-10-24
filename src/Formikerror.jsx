import { ErrorMessage } from "formik";
const FormikError = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(error) => {
        return <div style={{ color: "red" }}>{error}</div>;
      }}
    </ErrorMessage>
  );
};

export default FormikError;