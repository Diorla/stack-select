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

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  list: string[];
  value: string;
}

export default function Dropdown({ list, value, ...props }: SelectProps) {
  return (
    <Select value={value} {...props}>
      {list.map((item, idx) => (
        <Option key={idx}>{item}</Option>
      ))}
    </Select>
  );
}
