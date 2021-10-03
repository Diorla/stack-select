import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const InActiveStar = styled(FaStar)`
  color: silver;
  cursor: pointer;
  margin: 0.2rem;
  font-size: 1.2rem;
  transition: 0.1s linear transform;
  &:hover {
    transform: scale(1.4);
  }
`;

const ActiveStar = styled(InActiveStar)`
  color: orange;
`;

export default function Rating({
  value,
  onChange,
}: {
  value: number;
  onChange: (e: number) => void;
}) {
  const arr = [];
  for (let i = 1; i < 6; i++) arr.push(i);
  return (
    <div>
      {arr.map((item) =>
        value >= item ? (
          <ActiveStar
            key={item}
            onClick={() => (item === value ? onChange(0) : onChange(item))}
          />
        ) : (
          <InActiveStar key={item} onClick={() => onChange(item)} />
        )
      )}
    </div>
  );
}
