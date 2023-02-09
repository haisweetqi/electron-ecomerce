import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const SearchCustom = ({ handleSearch, placeholder, enterButton, style, size }: any) => {
  return (
    <>
      <Search
        placeholder={placeholder}
        onSearch={handleSearch}
        allowClear
        enterButton={enterButton}
        size={size}
        style={style}
      />
    </>
  )
}

export default SearchCustom
