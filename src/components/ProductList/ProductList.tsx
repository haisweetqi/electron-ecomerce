import React from 'react'
import { Card, Image } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { formatCurrency } from '../../utils/rule'
const { Meta } = Card
const ProductList = ({ product }: any) => {
  const data = product || []

  return (
    <ProductWrapper>
      <Card>
        <Link to={`/product/${data.id}`}>
          <ImageWrapper>
            <Image
              width='100%'
              height={'100%'}
              style={{ objectFit: 'cover' }}
              alt={data.productName}
              src={`http://hung.fresher.ameladev.click/${data.images[0].product_image}`}
            />
          </ImageWrapper>
        </Link>

        <Link to={`/product/${data.id}`}>
          <StyledSpan>{data.name}</StyledSpan>
        </Link>

        <StyledDiv>
          <p>{formatCurrency(data?.price)}VND</p>
          <p>{data.quantity} pieces</p>
        </StyledDiv>
      </Card>
    </ProductWrapper>
  )
}

export default ProductList

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid #b6b6b6;

  .ant-card-body {
    padding: 0;
    border: none;
  }

  .ant-card-bordered {
    border: none;
  }
`

const ImageWrapper = styled.div`
  height: 20rem;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
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

const StyledSpan = styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  overflow: hidden;
  line-height: 25px;
  -webkit-line-clamp: 2;
  height: 70px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`
