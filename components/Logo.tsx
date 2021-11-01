import React from "react";
import Title from "./Title";
import Hidden from "./Hidden";
import { FaToolbox } from "react-icons/fa";

export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: 4 }}>
      <Hidden lgUp>
        <FaToolbox style={{ fontSize: "1.5rem" }} />
      </Hidden>
      <Hidden lgDown>
        <Title />
      </Hidden>
    </div>
  );
}
