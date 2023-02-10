import React from 'react'
import { Pagination } from 'antd'
const PaginationCustom = ({ current, pageSize, total, handleChange }: any) => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <Pagination current={current} pageSize={pageSize} total={total} onChange={handleChange} />
    </div>
  )
}

export default PaginationCustom
