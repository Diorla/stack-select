import React, { useEffect, useRef, useState } from "react";
import Text from "./Text";
import Textarea from "./Textarea";

export default function EditableTextArea({
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
  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    ref?.current?.focus();
  });
  return editable ? (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => toggleEdit(value)}
      ref={ref}
      onKeyDown={(e) => (e.key === "Enter" ? toggleEdit(value) : null)}
      style={{ width: "100%" }}
      rows={4}
    />
  ) : (
    <Text
      variant={variant}
      style={{ display: "flex" }}
      onClick={() => toggleEdit(value)}
    >
      {value}
    </Text>
  );
}
