import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-size: 1rem;
    color: black;

  }
  button {
    border: none;
    outline: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
`

export const StyledImage = styled.img``

export const StyledH1 = styled.h1``

export const StyledH2 = styled.h2``

export const StyledH3 = styled.h3``

export const StyledP = styled.p``
