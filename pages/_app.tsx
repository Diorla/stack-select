import { createGlobalStyle, ThemeProvider } from "styled-components";
import UserProvider from "context";
// import "styles/global.css";
import palette from "theme/palette";
import transform from "theme/transform";
import breakpoints from "theme/breakpoints";
import elevation from "theme/elevation";
import priority from "theme/priority";
import { AppProps } from "next/app";
import Head from "next/head";

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
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </>
  );
}
