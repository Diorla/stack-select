import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "components/InputField";
import Button from "components/Button";
import Row from "components/Row";
import tool from "interfaces/tool";
import Rating from "components/Rating";
import InputLabel from "components/InputLabel";
import Dropdown from "components/Dropdown";
import { v4 } from "uuid";
import Pile from "components/Pile";
import ErrorMessage from "components/ErrorMessage";
import createTool from "services/createTool";
import { useUser } from "context";

const ToolForm = ({
  initialValues,
  onClose,
}: {
  initialValues: tool;
  onClose?: () => void;
}) => {
  const {
    user: { uid },
    stacks,
  } = useUser();
  const stackIdList = [
    { id: "misc", value: "Misc" },
    ...stacks.map((item) => {
      return {
        id: item.id,
        value: item.name,
      };
    }),
  ];
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().max(120, "Must be 120 characters or less"),
    rating: Yup.number().required("Please set rating"),
    stackId: Yup.string()
      .oneOf(
        stackIdList.map((item) => item.id),
        `Stack must be one of the following: ${stackIdList
          .map((item) => item.value)
          .join(", ")}`
      )
      .required("Please select a stack"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      createTool(uid, {
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
      <InputLabel>Rating</InputLabel>
      <Rating
        value={formik.values.rating}
        onChange={(value) => formik.setFieldValue("rating", value)}
      />
      <Pile>
        <InputLabel htmlFor="stack">Select stack</InputLabel>
        <Dropdown
          id="stack"
          {...formik.getFieldProps("stackId")}
          onChange={(e) =>
            formik.setFieldValue(
              "stackId",
              stackIdList.filter((item) => item.value === e.target.value)[0].id
            )
          }
          list={stackIdList}
          value={
            stackIdList.filter((item) => item.id === formik.values.stackId)[0]
              .value
          }
        />
        {formik.touched.stackId && formik.errors.stackId ? (
          <ErrorMessage>{formik.errors.stackId}</ErrorMessage>
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

export default ToolForm;
