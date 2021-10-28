import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputLabel from "components/InputLabel";
import Input from "components/Input";
import Pile from "components/Pile";
import ErrorMessage from "components/ErrorMessage";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isTouched?: boolean;
  errorMessage?: string;
}

const InputField = (props: InputProps) => {
  const { label, id, isTouched, errorMessage } = props;
  return (
    <Pile>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input {...props} />
      {isTouched ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Pile>
  );
};
const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};
const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        label="First Name"
        id="firstName"
        isTouched={formik.touched.firstName}
        errorMessage={formik.errors.firstName}
        {...formik.getFieldProps("firstName")}
      />
      <InputField
        label="Last Name"
        id="lastName"
        isTouched={formik.touched.lastName}
        errorMessage={formik.errors.lastName}
        {...formik.getFieldProps("lastName")}
      />
      <InputField
        label="Email"
        id="email"
        isTouched={formik.touched.email}
        errorMessage={formik.errors.email}
        {...formik.getFieldProps("email")}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
