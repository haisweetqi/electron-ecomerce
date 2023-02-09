import { useState } from 'react'
import { Image, Space, Table, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Container } from '../../Global.styled'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { StyledCartTotal, StyledCartTotalCheckout, StyledH3, StyledWrapper } from './cartStyle'
import { Quantity, QuantityWrapper } from '../ProductDetail/productDetailStyle'
import ButtonCustom from '../../components/common/Button'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/common/Wrapper'
import DividerCustom from '../../components/common/DividerCustom'

interface DataType {
  key: string
  image: string
  name: string
  price: number
  quantity: number
  subtotal: number
}
const Cart = () => {
  const [quantity, setQuantity] = useState(1)
  const handleDecrease = () => {
    setQuantity((prev) => prev - 1)
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }
  const handleDeleteProduct = () => {}
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
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => (
        <QuantityWrapper>
          <Button icon={<MinusOutlined />} onClick={handleDecrease} disabled={!(quantity - 1)}></Button>
          <Quantity>{quantity}</Quantity>
          <Button icon={<PlusOutlined />} onClick={handleIncrease}></Button>
        </QuantityWrapper>
      )
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
        <Wrapper flex='3'>
          <Table columns={columns} dataSource={data} pagination={false} />
          <Wrapper margin='2rem 0 0 0' display='flex' alignItems='center' justifyContent='space-between'>
            <ButtonCustom
              border='none'
              bgColor='#eda415'
              borderRadius='2rem'
              padding='1.5rem 2rem'
              colorHover='white'
              fw={500}
            >
              <Link to={'/'}>Continue shopping</Link>
            </ButtonCustom>
            <ButtonCustom
              border='1px solid #C33131'
              bgColor='#fff'
              borderRadius='2rem'
              padding='1.5rem 2rem'
              color='#C33131'
              fw={500}
            >
              Clear cart
            </ButtonCustom>
          </Wrapper>
        </Wrapper>
        <StyledCartTotal>
          <StyledH3>Cart total</StyledH3>
          <StyledCartTotalCheckout>
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Subtotal</h4>
              <span>$ 23,20</span>
            </Wrapper>
            <DividerCustom margin='0.5rem' />
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Total amount</h4>
              <span>$ 23,20</span>
            </Wrapper>

            <Wrapper display='flex' alignItems='center' justifyContent='center'>
              <ButtonCustom
                border='none'
                bgColor='#eda415'
                borderRadius='2rem'
                padding='0.8rem 2rem'
                colorHover='white'
                fw={500}
              >
                Proceed to checkout
              </ButtonCustom>
            </Wrapper>
          </StyledCartTotalCheckout>
        </StyledCartTotal>
      </StyledWrapper>
    </Container>
  )
}

export default Cart
