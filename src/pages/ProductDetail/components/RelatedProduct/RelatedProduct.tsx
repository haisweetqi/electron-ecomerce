import React from 'react'
import ProductList from '../../../../components/ProductList/ProductList'
import { ListProduct, RelatedWrapper, StyleH1 } from './relatedProductStyle'

const RelatedProduct = (props: any) => {
  console.log('11110', props.listProduct)
  const listProduct = props.listProduct || []
  const handleAddToCart = () => {
    console.log('Add Products')
  }

  return (
    <RelatedWrapper>
      <StyleH1>Related Product</StyleH1>
      <ListProduct>
        {Array(5)
          .fill(listProduct)
          .map((product: any, index: any) => (
            <ProductList product={product} key={index} />
          ))}
      </ListProduct>
    </RelatedWrapper>
  )
}

export default RelatedProduct
