import path from "interfaces/path";
import React from "react";
import styled from "styled-components";
import AppBar from "./AppBar";
import Main from "./Main";
import Sidebar from "./Sidebar";

const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.primary.main}80;
`;

export default function Layout({
  appBar,
  activePath,
  children,
}: {
  appBar: React.ReactNode;
  activePath: path;
  children: React.ReactNode;
}) {
  const arr = [1];
  for (let i = 2; i < 100; i++) arr.push(i);
  return (
    <StyledLayout>
      <AppBar>{appBar}</AppBar>
      <Main>
        <Sidebar activePath={activePath} />
        {children}
      </Main>
    </StyledLayout>
  );
}
