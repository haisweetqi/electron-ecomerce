import { useState } from 'react'
import { Image, Space, Table, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Container } from '../../Global.styled'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { StyledCartTotal, StyledCartTotalCheckout, StyledH3, StyledWrapper } from './cartStyle'
import { Quantity, QuantityWrapper } from '../ProductDetail/productDetailStyle'
import ButtonCustom from '../../components/common/Button'

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
        <div style={{ flex: 3 }}>
          <Table columns={columns} dataSource={data} pagination={false} />
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <ButtonCustom border='none' bgColor='#eda415' borderRadius='2rem' padding='1rem 1rem'>
              Continue shopping
            </ButtonCustom>
            <ButtonCustom
              border='1px solid #C33131'
              bgColor='#fff'
              borderRadius='2rem'
              padding='1rem 1rem'
              color='#C33131'
            >
              Clear cart
            </ButtonCustom>
          </div>
        </div>
        <StyledCartTotal>
          <StyledH3>Cart total</StyledH3>
          <StyledCartTotalCheckout>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
              <h4>Subtotal</h4>
              <span>$ 23,20</span>
            </div>
            <hr />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
              <h4>Total amount</h4>
              <span>$ 23,20</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ButtonCustom border='none' bgColor='#eda415' borderRadius='2rem' padding='0.5rem 1rem'>
                Proceed to checkout
              </ButtonCustom>
            </div>
          </StyledCartTotalCheckout>
        </StyledCartTotal>
      </StyledWrapper>
    </Container>
  )
}

export default Cart
