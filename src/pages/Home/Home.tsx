import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { productService } from '../../apis/product.api'
import PaginationCustom from '../../components/common/Pagination'
import styled from 'styled-components'
import ProductList from '../../components/ProductList/ProductList'
import { Spin } from 'antd'
import { Container } from '../../Global.styled'
import SearchCustom from './../../components/common/Search/SearchCustom'
const Home = () => {
  const [queryConfig, setQueryConfig] = useState({
    page: 1,
    search: ''
  })

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productService.getProducts(queryConfig)
    }
  })

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
    setQueryConfig({ ...queryConfig, page: page })
    refetch()
  }

  const handleSearch = (value: any) => {
    setQueryConfig({ ...queryConfig, search: value })
  }

  const handleAddToCart = () => {}
  return (
    <>
      <Container>
        <StyledH1>Products List</StyledH1>
        <SearchCustom
          handleSearch={handleSearch}
          placeholder='Search any things'
          enterButton='Search'
          size='large'
          style={{ width: 304 }}
        />

        <ProductsBox>
          {data?.data.data.data.map((product: any) => (
            <div key={product.id}>{product && <ProductList product={product} handleAddToCart={handleAddToCart} />}</div>
          ))}
        </ProductsBox>
        <PaginationCustom
          current={queryConfig.page}
          pageSize={data?.data.data.per_page}
          handleChange={handleChangePage}
          total={data?.data.data.total}
        />
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
