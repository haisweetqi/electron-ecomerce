import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const SearchCustom = ({ placeholder, enterButton, style, size }: any) => {
  return (
    <>
      <Search placeholder={placeholder} allowClear enterButton={enterButton} size={size} style={style} />
    </>
  )
}

export default SearchCustom
