import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { productService } from '../../apis/product.api'
import PaginationCustom from '../../components/common/Pagination'
import ProductList from '../../components/ProductList/ProductList'
import { Spin } from 'antd'
import { Container } from '../../Global.styled'

import { ProductsBox, StyledH1 } from './HomeStyle'
import SearchWrapper from './components/SearchWrapper/SearchWrapper'
const Home = () => {
  const initialValue = {
    page: 1,
    name: undefined,
    price: undefined,
    time: undefined,
    sort: undefined
  }
  const [queryConfig, setQueryConfig]: any = useState(initialValue)

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
    setQueryConfig({ ...queryConfig, name: value.name, price: value.price, time: value.time, sort: value.sort })
    refetch()
  }

  return (
    <>
      <Container>
        <StyledH1>Products List</StyledH1>
        <SearchWrapper handleSearch={handleSearch} />

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
