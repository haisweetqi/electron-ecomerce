import React from 'react'
import { Image, Space, Table, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Container } from '../../Global.styled'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styled from 'styled-components'

interface DataType {
  key: string
  image: string
  name: string
  price: number
  quantity: number
  subtotal: number
}
const Cart = () => {
  const handleDeleteProduct = () => {
    console.log('1112')
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => (
        <Image
          width={100}
          src='https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg'
          alt='image-pr'
        />
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Subtotal',
      dataIndex: 'subtotal',
      key: 'subtotal'
    },

    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <AiOutlineCloseCircle fontSize={'1.5rem'} onClick={handleDeleteProduct} />
        </Space>
      )
    }
  ]

  const data: DataType[] = [
    {
      key: '1',
      image: 'string',
      name: 'John Brown',
      price: 32,
      quantity: 12,
      subtotal: 120
    },
    {
      key: '2',
      image: 'string',
      name: 'John Brown',
      price: 32,
      quantity: 12,
      subtotal: 120
    },
    {
      key: '3',
      image: 'string',
      name: 'John Brown',
      price: 32,
      quantity: 12,
      subtotal: 120
    }
  ]
  return (
    <Container>
      <StyledWrapper>
        <div style={{ flex: 3 }}>
          <Table columns={columns} dataSource={data} pagination={false} />
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <StyledButton>Continue shopping</StyledButton>
            <StyledButton>Clear cart</StyledButton>
          </div>
        </div>
        <div style={{ flex: 1, border: '1px solid red' }}>
          <StyledH3>Cart total</StyledH3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
            <h4>Subtotal</h4>
            <span>$ 23,20</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
            <h4>Total amount</h4>
            <span>$ 23,20</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledButton>Proceed to checkout</StyledButton>
          </div>
        </div>
      </StyledWrapper>
    </Container>
  )
}

export default Cart

const StyledWrapper = styled.div`
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  column-gap: 2rem;
  flex-wrap: wrap;
`

const StyledButton = styled(Button)``

const StyledH3 = styled.h3`
  background: #e2f4ff;
  text-align: center;
  color: #232323;
  font-weight: 600;
  padding: 1rem 0;
`
