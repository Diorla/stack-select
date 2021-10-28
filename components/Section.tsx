import React from "react";
import Header from "./Header";
import Layer from "./Layer";
import Scroll from "./Scroll";

export default function Section({
  headerHeight,
  header,
  children,
  style,
}: {
  headerHeight: number;
  header: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <Layer style={style}>
      <Header headerHeight={headerHeight}>{header}</Header>
      <Scroll headerHeight={headerHeight}>{children}</Scroll>
    </Layer>
  );
}
