import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { productService } from '../../apis/product.api'
import PaginationCustom from '../../components/common/Pagination'
import styled from 'styled-components'
import ProductList from '../../components/ProductList/ProductList'
import { Spin } from 'antd'
import { Container } from '../../Global.styled'
const Home = () => {
  const [pagination, setPagination] = useState({
    page: 1
  })

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['products', pagination],
    queryFn: () => {
      return productService.getProducts(pagination)
    }
  })
  //   console.log(data?.data.data)

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

  const handleChangePage = (page: any) => {
    setPagination({ ...pagination, page: page })
    refetch()
  }

  const handleAddToCart = () => {}
  return (
    <>
      <Container>
        <StyledH1>Products List</StyledH1>

        <ProductsBox>
          {data?.data.data.data.map((product: any) => (
            <div key={product.id}>{product && <ProductList product={product} handleAddToCart={handleAddToCart} />}</div>
          ))}
        </ProductsBox>
        <PaginationCustom current={pagination.page} handleChange={handleChangePage} total={data?.data.data.total} />
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
  gap: 5rem;
  margin: 3rem 0;
`
