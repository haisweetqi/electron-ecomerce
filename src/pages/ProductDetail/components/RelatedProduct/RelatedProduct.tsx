import React from 'react'
import ProductList from '../../../../components/ProductList/ProductList'
import { ListProduct, RelatedWrapper, StyleH1 } from './relatedProductStyle'

const RelatedProduct = (props: any) => {
  const listProduct = props.listProduct || []
  const handleAddToCart = () => {
  }

  return (
    <RelatedWrapper>
      <StyleH1>Related Product</StyleH1>
      <ListProduct>
        {Array(4)
          .fill(listProduct)
          .map((product: any, index: any) => (
            <ProductList product={product} key={index} />
          ))}
      </ListProduct>
    </RelatedWrapper>
  )
}

export default RelatedProduct
