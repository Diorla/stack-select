import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "components/InputField";
import Button from "components/Button";
import Row from "components/Row";
import InputLabel from "components/InputLabel";
import Dropdown from "components/Dropdown";
import { v4 } from "uuid";
import Pile from "components/Pile";
import ErrorMessage from "components/ErrorMessage";
import { useUser } from "context";
import project from "interfaces/project";
import createProject from "services/createProject";

const ProjectForm = ({
  initialValues,
  onClose,
}: {
  initialValues: project;
  onClose?: () => void;
}) => {
  const {
    user: { uid },
  } = useUser();
  const statusList = ["todo", "doing", "done", "reviewing"];
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().max(160, "Must be 160 characters or less"),
    status: Yup.string().oneOf(statusList).required("Please select a stack"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      createProject(uid, {
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
      <Pile>
        <InputLabel htmlFor="status">Status</InputLabel>
        <Dropdown
          style={{ textTransform: "capitalize" }}
          id="status"
          {...formik.getFieldProps("status")}
          onChange={(e) => formik.setFieldValue("status", e.target.value)}
          list={statusList}
          value={formik.values.status}
        />
        {formik.touched.status && formik.errors.status ? (
          <ErrorMessage>{formik.errors.status}</ErrorMessage>
        ) : null}
      </Pile>
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

export default ProjectForm;
