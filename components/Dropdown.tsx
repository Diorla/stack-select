import { Key } from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 0.2rem;
  border: 1px solid ${({ theme }) => theme.palette.background.shade};
  margin: 0.1rem;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.text.shade};
  }
`;
const Option = styled.option``;

interface StringProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  list: string[];
  value: string;
}
interface ObjectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  list: { id: string; value: string }[];
  value: string;
}
const getType = (list: string[] | { id: string; value: string }[]) => {
  if (typeof list[0] === "string") return "string";
  else return "object";
};
export default function Dropdown({
  list,
  value,
  ...props
}: StringProps): JSX.Element;
export default function Dropdown({
  list,
  value,
  ...props
}: ObjectProps): JSX.Element;
export default function Dropdown({ list, value, ...props }: any): JSX.Element {
  return (
    <Select value={value} {...props}>
      {getType(list) === "string"
        ? list.map((item: string, idx: Key) => (
            <Option key={idx}>{item}</Option>
          ))
        : list.map((item: { id: string; value: string }) => (
            <Option key={item.id}>{item.value}</Option>
          ))}
    </Select>
  );
}
