import { Form } from 'antd'
import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #003f62;
  a {
    font-weight: 500;
    font-size: 16px;
    color: #160062;
  }
  button {
    width: 100%;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const OrWith = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const BlackLine = styled.div`
  flex-grow: 1;
  border: 0.4px solid rgba(49, 49, 49, 0.5);
`

export const FormCustom = styled(Form)`
  width: 450px;
  background-color: white;
  border-radius: 4px;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;
`

export const Image = styled.img`
  margin-right: 10px;
`

export const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 1rem;
`
export const StyledH3 = styled.h3`
  font-weight: 400;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
`
export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #0d0e0e;
`
