import React, { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineCar } from 'react-icons/ai'
import styled from 'styled-components'
import { Container } from '../../Global.styled'

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <StyledSpan>Need help? Call us: (+98) 0234 456 789</StyledSpan>
        <StyledInfo>
          <div>
            <IoLocationOutline />
            <StyledSpan>Our store</StyledSpan>
          </div>
          <div>
            <AiOutlineCar />
            <StyledSpan>Track your order</StyledSpan>
          </div>
        </StyledInfo>
      </Nav>
    </Container>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`

export const StyledSpan = styled.span`
  color: #4f4f4f;
  margin-left: 0.75rem;
  font-size: 1rem;
  color: #292d32;
`
