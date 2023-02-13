import { useContext } from 'react'
import { Form, Input } from 'antd'
import Wrapper from '../../components/common/Wrapper'
import { StyledH2 } from '../../Global.styled'
import { AppContext } from '../../contexts/auth.context'
import ButtonCustom from '../../components/common/Button'

const OrderAddress = ({ handleCheckout }: any) => {
  const { cart, setCart }: any = useContext(AppContext)

  return (
    <Wrapper display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
      <StyledH2 style={{ margin: '2rem 0' }}>Order Address</StyledH2>

      <Form
        style={{ width: '100%' }}
        name='basic'
        onFinish={handleCheckout}
        autoComplete='on'
        size='large'
        layout='vertical'
      >
        <Form.Item label='Full Name' name='name' rules={[{ required: true, message: 'Please input your full name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='Phone Number'
          name='phone number'
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
