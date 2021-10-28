import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "components/InputField";
import Button from "components/Button";
import Row from "components/Row";
import stack from "interfaces/stack";
import { v4 } from "uuid";
import createStack from "services/createStack";
import { useUser } from "context";

const StackForm = ({
  initialValues,
  onClose,
}: {
  initialValues: stack;
  onClose?: () => void;
}) => {
  const {
    user: { uid },
  } = useUser();

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().max(120, "Must be 120 characters or less"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      createStack(uid, {
        ...values,
        id: values.id || v4(),
        modified: Date.now(),
      }).then(() => onClose && onClose());
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        label="Name"
        id="name"
        isTouched={formik.touched.name}
        errorMessage={formik.errors.name}
        {...formik.getFieldProps("name")}
      />
      <InputField
        label="Description"
        id="description"
        multiline
        rows={3}
        isTouched={formik.touched.description}
        errorMessage={formik.errors.description}
        {...formik.getFieldProps("description")}
      />
      <Row
        style={{
          justifyContent: "space-evenly",
          marginTop: 8,
          marginBottom: 4,
        }}
      >
        <Button type="submit" color="success">
          Save
        </Button>
        <Button
          type="reset"
          onClick={(e) => {
            formik.handleReset(e);
            onClose && onClose();
          }}
          color="error"
        >
          Cancel
        </Button>
      </Row>
    </form>
  );
};

export default StackForm;
