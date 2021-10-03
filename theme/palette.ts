import { Palette } from "styled-components";
import { darken, lighten } from "scripts/color-functions";

const primary = {
  main: "#4EA699",
  dark: darken("#4EA699"),
  light: lighten("#4EA699"),
};

// chocolate
const secondary = {
  main: "#7B3F00",
  dark: darken("#7B3F00"),
  light: lighten("#7B3F00"),
};

// gold, other variances:
// #fafad2 #eee8aa #daa520
const tertiary = {
  main: "#ffd700",
  dark: darken("#ffd700"),
  light: lighten("#ffd700"),
};

const white = "#ffffff";
const black = "#111111";
const offwhite = "#dddddd";
const gray = "#333333";

const blue = "cornflowerblue";
const purple = "#673ab7";

const error = {
  main: "#e83c3d",
  dark: darken("#e83c3d"),
  light: lighten("#e83c3d"),
};

const warning = {
  main: "#ffac03",
  dark: darken("#ffac03"),
  light: lighten("#ffac03"),
};

const info = {
  main: "#17b0f1",
  dark: darken("#17b0f1"),
  light: lighten("#17b0f1"),
};

const success = {
  main: "#329b52",
  dark: darken("#329b52"),
  light: lighten("#329b52"),
};

const palette: Palette = {
  primary,
  secondary,
  tertiary,
  background: {
    main: white,
    shade: offwhite,
  },
  text: {
    main: black,
    shade: gray,
  },
  link: {
    main: blue,
    visited: purple,
    hover: blue,
    focus: blue,
    active: blue,
  },
  error,
  warning,
  info,
  success,
};

export default palette;
