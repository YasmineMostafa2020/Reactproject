import { Field } from "formik";
import Formikerror from "./Formikerror";
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <label htmlFor={name} className="d-block mb-2">
              {label}
            </label>
            <input
            className="btn btn-outline-primary"
              type={type}
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
            <Formikerror name={name} />
          </>
        );
      }}
    </Field>
  );
};
export default FormikField;
