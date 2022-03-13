import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root {
    --background: rgb(44, 46, 53);
    --text-title: #fff;
    --text-body: #969CB3;
    --bg-primary: #ca29c8;
    --bgc-body: #121212;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    font-family: 'Poppins', sans-serif;
    /* background: #fff; */
    background: var(--bgc-body);
    background-image: linear-gradient(45deg, #12121200 77%, #009EC8 130%);
    -webkit-font-smoothing: antialiased;
  }
  body, p, input , button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`