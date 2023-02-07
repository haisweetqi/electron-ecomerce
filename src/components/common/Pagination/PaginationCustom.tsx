import React from 'react'
import { Pagination } from 'antd'
const PaginationCustom = ({ current, total, handleChange }: any) => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <Pagination current={current} total={total} onChange={handleChange} />
    </div>
  )
}

export default PaginationCustom
