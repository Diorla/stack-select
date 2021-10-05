import React, { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Input from "./Input";
import Text from "./Text";

export default function Editable({
  editable,
  initialValue,
  toggleEdit,
  variant = "body1",
}: {
  editable: boolean;
  initialValue: string;
  toggleEdit: (value: string) => void;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline";
}) {
  const [value, setValue] = useState(initialValue);
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref?.current?.focus();
  });
  return editable ? (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => toggleEdit(value)}
      ref={ref}
      onKeyDown={(e) => (e.key === "Enter" ? toggleEdit(value) : null)}
    />
  ) : (
    <Text variant={variant} style={{ display: "flex" }}>
      {value}
      <MdEdit
        onClick={() => toggleEdit(value)}
        style={{ cursor: "pointer", fontSize: "2rem" }}
      />
    </Text>
  );
}
