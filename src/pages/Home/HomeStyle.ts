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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`
