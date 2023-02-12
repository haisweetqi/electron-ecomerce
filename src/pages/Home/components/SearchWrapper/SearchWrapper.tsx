import React from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import styled from 'styled-components'
const SearchWrapper = ({ handleSearch }: any) => {
  return (
    <>
      <FormWrapper name='basic' onFinish={handleSearch} autoComplete='off'>
        <Form.Item label='Name' name='name'>
          <Input placeholder='Name' />
        </Form.Item>

        <Form.Item label='Price' name='price' style={{ width: 200 }}>
          <Select>
            <Select.Option value='tang'>Tang dan </Select.Option>
            <Select.Option value='giam'>Giam dan</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='Time' name='time' style={{ width: 200 }}>
          <Select>
            <Select.Option value='newest'>Newest</Select.Option>
            <Select.Option value='oldest'>Oldest</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='Sort' name='sort' style={{ width: 200 }}>
          <Select>
            <Select.Option value='az'>Sap xep tu a-z</Select.Option>
            <Select.Option value='za'>Sap xep tu z-a</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Search
          </Button>
        </Form.Item>
      </FormWrapper>
    </>
  )
}

export default SearchWrapper

const FormWrapper = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`
