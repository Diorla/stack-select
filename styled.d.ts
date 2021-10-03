import "styled-components";

declare module "styled-components" {
  // device breakpoints
  export interface Breakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }

  // shadow
  export interface Elevation {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  }

  //z-index
  export interface Priority {
    base: number;
    low: number;
    header: number;
    modal: number;
    max: number;
  }

  // colours
  export interface Palette {
    primary: {
      main: string;
      dark: string;
      light: string;
    };
    secondary: {
      main: string;
      dark: string;
      light: string;
    };
    tertiary: {
      main: string;
      dark: string;
      light: string;
    };
    background: {
      main: string;
      /**
       * darker or lighter depending on the mode
       */
      shade: string;
    };
    text: {
      main: string;
      /**
       * darker or lighter depending on the theme
       */
      shade: string;
    };
    link: {
      main: string;
      visited?: string;
      hover?: string;
      focus?: string;
      active?: string;
    };
    error: {
      main: string;
      dark: string;
      light: string;
    };
    warning: {
      main: string;
      dark: string;
      light: string;
    };
    info: {
      main: string;
      dark: string;
      light: string;
    };
    success: {
      main: string;
      dark: string;
      light: string;
    };
  }

  // animation
  export interface Transform {
    duration: {
      shortest: string;
      short: string;
      standard: string;
      long: string;
      longest: string;
    };
  }

  export interface Elevation {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  }
}
