import React from "react";
import Header from "./Header";
import Layer from "./Layer";
import Scroll from "./Scroll";

export default function Section({
  headerHeight,
  header,
  children,
  style,
  headerStyle,
  scrollStyle,
}: {
  headerHeight: number;
  header: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  scrollStyle?: React.CSSProperties;
}) {
  return (
    <Layer style={style}>
      <Header headerHeight={headerHeight} style={headerStyle}>
        {header}
      </Header>
      <Scroll headerHeight={headerHeight} style={scrollStyle}>
        {children}
      </Scroll>
    </Layer>
  );
}
