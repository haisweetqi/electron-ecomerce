import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { productService } from '../../apis/product.api'
import PaginationCustom from '../../components/common/Pagination'
import styled from 'styled-components'
import ProductList from '../../components/ProductList/ProductList'
import { Spin } from 'antd'
import { Container } from '../../Global.styled'
import SearchCustom from './../../components/common/Search/SearchCustom'
import { ProductsBox, StyledH1 } from './HomeStyle'
const Home = () => {
  const [queryConfig, setQueryConfig]: any = useState({
    page: 1,
    search: undefined
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
    refetch()
  }

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
            <div key={product.id}>{product && <ProductList product={product} />}</div>
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
