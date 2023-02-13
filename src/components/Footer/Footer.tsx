import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/logo.png'
import { Container, StyledImage } from '../../Global.styled'

const Footer = () => {
  return (
    <Wrapper>
      <Container className='grid'>
        <StyledImage src={logo} alt='logo' />

        <div>
          <StyledH2>Find product</StyledH2>
          <li>
            <Link to=''>Brownze arnold</Link>
          </li>

          <li>
            <Link to=''>Chronograph blue</Link>
          </li>
          <li>
            <Link to=''>Smart phones</Link>
          </li>
          <li>
            <Link to=''>Automatic watch</Link>
          </li>
          <li>
            <Link to=''>Hair straighteners</Link>
          </li>
        </div>
        <div>
          <StyledH2>Get help</StyledH2>
          <li>
            <Link to=''>About us</Link>
          </li>
          <li>
            <Link to=''>Contact us</Link>
          </li>
          <li>
            <Link to=''>Return policy</Link>
          </li>
          <li>
            <Link to=''>Privacy policy</Link>
          </li>
          <li>
            <Link to=''>Payment policy</Link>
          </li>
        </div>
        <div>
          <StyledH2>About us</StyledH2>
          <li>
            <Link to=''>News</Link>
          </li>
          <li>
            <Link to=''>Service</Link>
          </li>
          <li>
            <Link to=''>Our policy</Link>
          </li>
          <li>
            <Link to=''>Custmer care</Link>
          </li>
          <li>
            <Link to=''>Faq’s</Link>
          </li>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Footer

export const Wrapper = styled.footer`
  background-color: #e2f4ff;
  padding: 2rem 0;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    gap: 2.5rem;
    div {
      display: flex;

      flex-direction: column;
      row-gap: 20px;
      text-align: left;
      a {
        color: #1b5a7d;
        transition: ease-in 0.3s;
        :hover {
          margin-left: 1rem;
        }
      }
    }
  }
`

export const StyledSpan = styled.span`
  color: #4f4f4f;
  font-size: 1rem;
`

export const StyledH2 = styled.h2`
  color: #1b5a7d;
`
