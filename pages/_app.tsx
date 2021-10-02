import { createGlobalStyle, ThemeProvider } from "styled-components";
import UserProvider from "context";
import palette from "theme/palette";
import transform from "theme/transform";
import breakpoints from "theme/breakpoints";
import elevation from "theme/elevation";
import priority from "theme/priority";
import { AppProps } from "next/app";

const theme = {
  breakpoints,
  elevation,
  palette,
  priority,
  transform,
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
  }
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
