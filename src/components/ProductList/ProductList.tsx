import React from 'react'
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const { Meta } = Card
const ProductList = ({ product }: any) => {
  return (
    <>
      <Card style={{ width: 240 }}>
        <Link to={`/product/${product.id}`}>
          {}
          <img
            alt={product.productName}
            src={
              'https://img.freepik.com/free-psd/chair-pillow_176382-875.jpg?w=740&t=st=1674708211~exp=1674708811~hmac=3b5ca3b502558e2e9ec33eada6e0f046f2fa4622462f59701d359136f140cef6https://img.freepik.com/free-psd/chair-pillow_176382-875.jpg?w=740&t=st=1674708211~exp=1674708811~hmac=3b5ca3b502558e2e9ec33eada6e0f046f2fa4622462f59701d359136f140cef6'
            }
            height={240}
          />
        </Link>
        <Meta title={product.name} style={{ textTransform: 'capitalize' }} />
        <StyledDiv>
          <p>{product.price} VND</p>
          <p>30.7k sold</p>
        </StyledDiv>
      </Card>
    </>
  )
}

export default ProductList

const StyledDiv = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 500;
    color: #606060;
  }

  svg {
    color: #eda415;
    font-size: 1.25rem;
    cursor: pointer;
  }
`

const ButtonStyled = styled(Button)`
  background-color: #eda415;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
`
