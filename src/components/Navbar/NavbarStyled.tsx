import styled from 'styled-components'
export const NavBarContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  background: #f4f4f4;
  position: sticky;
  top: 72px;
  z-index: 100;
`
export const NavbarLinkUl = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 29px;
  list-style-type: none;
`

export const NavbarLinkLi = styled.li`
  a {
    font-weight: 500;
    font-size: 1rem;
    color: #3a3a3a;
  }

  .active {
    font-weight: 600;
    font-size: 1.1rem;
  }
`
export const StyledLi = styled.li`
  font-weight: 700;
  font-size: 16px;
  color: #003f62;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
