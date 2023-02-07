import React, { useContext } from 'react'
import { AppContext } from '../../contexts/auth.context'
import { useQuery } from '@tanstack/react-query'
import { productService } from '../../apis/product.api'
import PaginationCustom from '../../components/common/Pagination'
import styled from 'styled-components'
import SelectCustom from '../../components/common/Select'
import ProductList from '../../components/ProductList/ProductList'
import { Spin } from 'antd'
import { Container } from '../../Global.styled'
const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return productService.getProducts()
    }
  })

  console.log(data?.data.data.data, isLoading, isError)

  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    )
  }

  if (isError) {
    return <div>Error...</div>
  }

  const handleAddToCart = () => {}
  return (
    <>
      <Container>
        <StyledH1>Products List</StyledH1>
        <SearchWrapper>
          <SelectCustom
            defaultValue={'Filter By Category'}
            style={{ width: 200 }}
            // handleChange={handleChange}
            // options={options}
          />
          <SelectCustom
            defaultValue={'Sort By Category'}
            style={{ width: 200 }}
            // handleChange={handleChange}
            // options={options}
          />
          <SelectCustom
            defaultValue={'Sort By Category'}
            style={{ width: 200 }}
            // handleChange={handleChange}
            // options={options}
          />
        </SearchWrapper>
        <ProductsBox>
          {data?.data.data.data.map((product: any) => (
            <div key={product.id}>
              {product && <ProductList product={product} handleAddToCart={handleAddToCart} />}
            </div>
          ))}
        </ProductsBox>
        <PaginationCustom />
      </Container>
    </>
  )
}

export default Home

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`

export const StyledH1 = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 64px;
  color: #003f62;
  margin: 2rem;
`

export const ProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 6rem;
  margin: 3rem 0;
`
