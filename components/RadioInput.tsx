import React from "react";
import styled from "styled-components";
import Row from "./Row";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function Radio({ label, ...props }: RadioProps) {
  return (
    <Row>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </Row>
  );
}
