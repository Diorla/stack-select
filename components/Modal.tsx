import { useEffect, useRef } from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.text.main}cc;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const Box = styled(Card)`
  width: clamp(240px, 80%, 480px);
  border-radius: 4px;
  padding: 0.2rem;
`;

export default function Modal({
  visible,
  children,
  onClose,
}: {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (!e.target.className.includes("exclude-box")) onClose();
    };
    ref?.current?.addEventListener("click", handleClick);
    return () => {
      ref?.current?.removeEventListener("click", handleClick);
    };
  }, []);
  if (visible)
    return (
      <Wrapper ref={ref}>
        <Box elevation={3} className="exclude-box">
          {children}
        </Box>
      </Wrapper>
    );
  return null;
}
