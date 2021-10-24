import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
    validationSchema: yup.object({
      email: yup.string().required(),
      password: yup.string().required(),
    })
  })
  return (
    <form onSubmit={formik.handleSubmit} className="ms-5 mt-5">
      <div>
        <label htmlFor="email" className="d-block" >E-mail</label>
        <input className="btn btn-outline-primary" type="email" name="email" {...formik.getFieldProps("email")} />

        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
        <label htmlFor="password" className="d-block" >Password</label>
        <input className="btn btn-outline-primary" type="password" name="password" {...formik.getFieldProps("password")} />

        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
        <label htmlFor="rememberMe" className="d-block" >Remember me</label>
        <input type="checkbox" name="rememberMe" {...formik.getFieldProps("rememberMe")} />

        {formik.touched.rememberMe && formik.errors.rememberMe && (
          <div style={{ color: "red" }}>{formik.errors.rememberMe}</div>
        )}
        <button className="d-block btn btn-primary">submit</button>
        <pre>{JSON.stringify(formik, null, 4)}</pre>
      </div>

    </form>
  )
}
export default Login;

