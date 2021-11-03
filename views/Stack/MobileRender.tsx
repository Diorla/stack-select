import Hidden from "components/Hidden";
import React from "react";
import styled from "styled-components";

const MobileStyle = styled.div`
  position: fixed;
  width: clamp(240px, 50vw, 640px);
  right: 0;
`;

export default function MobileRender({
  children,
  hidden,
}: {
  children: React.ReactNode;
  hidden: boolean;
}) {
  return (
    <>
      <Hidden lgDown>{children}</Hidden>
      <Hidden lgUp>
        {!hidden ? <MobileStyle>{children}</MobileStyle> : null}
      </Hidden>
    </>
  );
}
