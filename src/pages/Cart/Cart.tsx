import { useState, useEffect, useContext } from 'react'
import { Image, Table, Button, Popconfirm } from 'antd'
import { Container } from '../../Global.styled'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { StyledCartTotal, StyledCartTotalCheckout, StyledH3, StyledWrapper } from './cartStyle'
import { QuantityWrapper } from '../ProductDetail/productDetailStyle'
import ButtonCustom from '../../components/common/Button'
import { Link, useNavigate } from 'react-router-dom'
import Wrapper from '../../components/common/Wrapper'
import DividerCustom from '../../components/common/DividerCustom'
import { setCartToLS, setTotalAmountToLS } from '../../utils/auth'
import { AppContext } from '../../contexts/auth.context'
import OrderAddress from '../OrderAddress'
import { useMutation } from '@tanstack/react-query'
import { paymentService } from '../../apis/payment.api'

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
  const { cart, setCart, total, setTotal }: any = useContext(AppContext)

  const [priceTotal, setPriceTotal] = useState({
    total: 0,
    discount: 0,
    shippingTotal: 0
  })

  const navigate = useNavigate()

  useEffect(() => {
    handleTotal()
  }, [cart])

  const handleTotal = () => {
    const total = cart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)
    const discount = cart.reduce((acc: any, item: any) => acc + (item.discount * item.price * item.quantity) / 100, 0)
    const shippingTotal = cart.reduce((acc: any, item: any) => acc + item.discount, 0)
    setPriceTotal({
      total: total,
      discount: discount,
      shippingTotal: shippingTotal
    })
    const totalMoney = total - shippingTotal - discount
    setTotalAmountToLS(totalMoney)

    setTotal(totalMoney)
  }

  const priceFinish = priceTotal.total - priceTotal.shippingTotal - priceTotal.discount

  const handleDecrease = (key: number) => {
    const newData = [...cart]
    const target = newData.find((item) => item.key === key)
    if (target) {
      target.quantity -= 1
      setCart(newData)
    }
  }

  const handleIncrease = (key: number) => {
    const newData = [...cart]
    const target = newData.find((item) => item.key === key)
    if (target) {
      target.quantity += 1
      setCart(newData)
    }
  }

  const convertPrice = (number = 0) => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
  }

  const handleClickCheckout = () => {
    navigate('/order')
  }

  return (
    <Container>
      <StyledWrapper>
        <Wrapper flex='3'>
          <Table dataSource={cart} pagination={false}>
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
                    const newData = cart.filter((item: any) => item.key !== record.key)
                    setCart(newData)
                    setCartToLS(newData)
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
              bgcolor='#eda415'
              borderradius='2rem'
              padding='1.5rem 2rem'
              color='#fff'
              fw={500}
            >
              <Link to={'/'}>Continue shopping</Link>
            </ButtonCustom>

            <Popconfirm
              title='Are you sure you want to delete all item?'
              onConfirm={() => {
                setCart([])
                setCartToLS([])
              }}
            >
              <ButtonCustom
                border='1px solid #C33131'
                bgcolor='#fff'
                borderradius='2rem'
                padding='1.5rem 2rem'
                color='#C33131'
                fw={500}
                disabled={cart.length === 0}
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
              <span>{convertPrice(priceTotal.total)}</span>
            </Wrapper>
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Discount</h4>
              <span>{convertPrice(priceTotal.discount)}</span>
            </Wrapper>
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Shipping Total</h4>
              <span>{convertPrice(priceTotal.shippingTotal)}</span>
            </Wrapper>
            <DividerCustom />
            <Wrapper display='flex' alignItems='center' justifyContent='space-between' padding='1rem'>
              <h4>Total amount</h4>
              <span>{convertPrice(priceFinish)}</span>
            </Wrapper>
            <ButtonCustom
              border='none'
              bgcolor='#eda415'
              borderradius='2rem'
              padding='1.25rem 2rem'
              color='#fff'
              colorHover='white'
              fw={500}
              disabled={cart.length === 0}
              htmlType='submit'
              onClick={handleClickCheckout}
            >
              Proceed to checkout
            </ButtonCustom>
          </StyledCartTotalCheckout>
        </StyledCartTotal>
      </StyledWrapper>
    </Container>
  )
}

export default Cart
