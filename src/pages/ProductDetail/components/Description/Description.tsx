import React from 'react'
import styled from 'styled-components'

const Description = ({ description }: any) => {
  return (
    <DescriptionWrapper>
      <StyledH2>Description</StyledH2>
      <StyledP>{description}</StyledP>
    </DescriptionWrapper>
  )
}

export default Description

const DescriptionWrapper = styled.div`
  padding: 2.5rem 2rem;
  border: 1px solid #b8b8b8;
  border-radius: 20px;
`
const StyledH2 = styled.h1`
  color: #003f62;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const StyledP = styled.p`
  color: #4f4f4f;
  font-size: 1.25rem;
  text-indent: 1.5rem;
  background-repeat: repeat;
`
