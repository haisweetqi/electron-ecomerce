import React from 'react'
import { Pagination } from 'antd'
const PaginationCustom = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <Pagination current={1} total={50} />
    </div>
  )
}

export default PaginationCustom
