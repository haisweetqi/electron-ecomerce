import { useState, useEffect, useContext } from 'react'
import { Image, Space, Table, Button, Popconfirm } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Container } from '../../Global.styled'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { StyledCartTotal, StyledCartTotalCheckout, StyledH3, StyledWrapper } from './cartStyle'
import { QuantityWrapper } from '../ProductDetail/productDetailStyle'
import ButtonCustom from '../../components/common/Button'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/common/Wrapper'
import DividerCustom from '../../components/common/DividerCustom'
import { setCartToLS } from '../../utils/auth'
import { AppContext } from '../../contexts/auth.context'

interface Item {
  key: number
  image: string
  name: string
  price: number
  quantity: number
  shipping: 100000
  discount: 10
}

const Cart = () => {
  const { isAuthenticated, setIsAuthenticated, cart, setCart }: any = useContext(AppContext)
  const [data, setData] = useState(cart)
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [shippingTotal, setShippingTotal] = useState(0)

  useEffect(() => {
    setTotal(data.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0))
    setDiscount(data.reduce((acc: any, item: any) => acc + (item.discount * item.price * item.quantity) / 100, 0))
    setShippingTotal(data.reduce((acc: any, item: any) => acc + item.discount, 0))
  }, [data])

  const handleDecrease = (key: number) => {
    const newData = [...data]
    const target = newData.find((item) => item.key === key)
    if (target) {
      target.quantity -= 1
      setData(newData)
    }
  }

  const handleIncrease = (key: number) => {
    const newData = [...data]
    const target = newData.find((item) => item.key === key)
    if (target) {
      target.quantity += 1
      setData(newData)
    }
  }

  const convertPrice = (number = 0) => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }

  return (
    <Container>
      <StyledWrapper>
        <Wrapper flex='3'>
          <Table dataSource={data} pagination={false}>
            <Table.Column
              title='Image'
              key='image'
              render={(_, record: Item) => (
                <>
                  <Image width={100} src={`http://hung.fresher.ameladev.click/${record.image}`} alt='image-product' />
                </>
              )}
            />
            <Table.Column
              title='Price'
              dataIndex='price'
              key='price'
              render={(_, record: Item) => <>{convertPrice(record.price)} </>}
            />
            <Table.Column
              title='Quantity'
              key='quantity'
              render={(text, record: Item) => (
                <QuantityWrapper>
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() => handleDecrease(record.key)}
                    disabled={!(record.quantity - 1)}
                  />
                  {record.quantity}
                  <Button icon={<PlusOutlined />} onClick={() => handleIncrease(record.key)} />
                </QuantityWrapper>
              )}
            />
            <Table.Column title='Shipping cost' dataIndex='shipping' key='shipping' />
            <Table.Column title='Discount (%)' dataIndex='discount' key='discount' />
            <Table.Column
              title='OrderTotal'
              key='orderTotal'
              render={(text, record: Item) => <>{convertPrice(record.quantity * record.price)} </>}
            />

            <Table.Column
              title=''
              key='action'
              render={(text, record: Item) => (
                <Popconfirm
                  title='Are you sure you want to delete this item?'
                  onConfirm={() => {
                    const newData = data.filter((item: any) => item.key !== record.key)
                    setData(newData)
                  }}
                >
                  <ButtonCustom border='none' children={<AiOutlineCloseCircle fontSize={'1.5rem'} />} />
                </Popconfirm>
              )}
            />
          </Table>

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

            <Popconfirm
              title='Are you sure you want to delete all item?'
              onConfirm={() => {
                setCartToLS([])
                setData([])
              }}
            >
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
            </Popconfirm>
          </Wrapper>
        </Wrapper>
        <StyledCartTotal>
          <StyledH3>Cart total</StyledH3>
          <StyledCartTotalCheckout>
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Product Subtotal</h4>
              <span>{convertPrice(total)}</span>
            </Wrapper>
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Discount</h4>
              <span>{convertPrice(discount)}</span>
            </Wrapper>
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Shipping Total</h4>
              <span>{convertPrice(shippingTotal)}</span>
            </Wrapper>
            <DividerCustom />
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Total amount</h4>
              <span>{convertPrice(total - shippingTotal - discount)}</span>
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
