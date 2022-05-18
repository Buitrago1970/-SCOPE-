import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: cooper-black-std, serif;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Cinzel', serif;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  } */
  body {
    /* font-family: 'Cinzel', serif; */
    font-family: cooper-black-std, serif;
    font-weight: 700;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    input[type="text" i] {
    padding: 0;
}
  }
  
`
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}