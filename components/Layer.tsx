import styled from "styled-components";

const Layer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.elevation[2]};
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  background: white;
`;

export default Layer;
