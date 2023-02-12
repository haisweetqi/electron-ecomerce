import styled from 'styled-components'

export const StyledH1 = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 64px;
  color: #003f62;
  margin: 2rem;
`

export const ProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 6rem;
  margin: 3rem 0;
`
