import { useContext } from 'react'
import { Form, Input } from 'antd'
import Wrapper from '../../components/common/Wrapper'
import { StyledH2 } from '../../Global.styled'
import { AppContext } from '../../contexts/auth.context'
import ButtonCustom from '../../components/common/Button'
import { useMutation } from '@tanstack/react-query'
import { paymentService } from '../../apis/payment.api'
import { toast } from 'react-toastify'
import HttpStatusCode from '../../constants/httpStatusCode'
import { setCartToLS } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'

const OrderAddress = () => {
  const { cart, total, setCart, setTotal }: any = useContext(AppContext)
  const navigate = useNavigate()

  const dataCart = cart.map((item: any) => {
    return {
      product_id: item.key,
      quantity: item.quantity
    }
  })

  const paymentMutation = useMutation({
    mutationFn: (body: any) => paymentService.payment(body)
  })

  const handlePayment = (values: any) => {
    const dataCheckout = {
      name: values.name,
      phone: values.phone,
      address: values.address,
      total_amount: total,
      obj: dataCart
    }
    console.log(dataCheckout)

    paymentMutation.mutate(
      { dataCheckout },
      {
        onSuccess: (dataSuccess) => {
          const { data } = dataSuccess

          if (data.status === HttpStatusCode.Ok) {
            setCart([])
            setCartToLS([])
            setTotal(0)
            navigate('/payment')
          }
        },
        onError: (error: any) => {
          toast.error(error.response.data.message)
        }
      }
    )
  }

  return (
    <Wrapper display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
      <StyledH2>{total}</StyledH2>
      <StyledH2 style={{ margin: '2rem 0' }}>Order Address</StyledH2>
      <Form
        style={{ width: '50%' }}
        name='basic'
        onFinish={handlePayment}
        autoComplete='on'
        size='large'
        layout='vertical'
      >
        <Form.Item label='Full Name' name='name' rules={[{ required: true, message: 'Please input your full name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='Phone Number'
          name='phone'
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label='Address' name='address' rules={[{ required: true, message: 'Please input your address!' }]}>
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item>
          <Wrapper display='flex' alignItems='center' justifyContent='center' padding='1rem 0'>
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
            >
              Proceed to checkout
            </ButtonCustom>
          </Wrapper>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default OrderAddress
