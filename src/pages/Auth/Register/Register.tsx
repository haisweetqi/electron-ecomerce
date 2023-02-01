import { useContext } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import googleIcon from '../../../assets/images/google.png'
import facebookIcon from '../../../assets/images/facebook.png'

import styled from 'styled-components'

const Login = () => {
  const onFinish = (values: any) => {}

  return (
    <RegisterContainer>
      <FormCustom size='large' name='normal_login' className='login-form' onFinish={onFinish} layout='vertical'>
        <StyledH2>Create an account</StyledH2>
        <StyledSpan>Connect with your friends today!</StyledSpan>

        <Form.Item name='username'>
          <Input size='large' placeholder='Username' />
        </Form.Item>

        <Form.Item name='password'>
          <Input.Password
            size='large'
            placeholder='Enter your password'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <Form.Item name='confirmPassword'>
          <Input.Password
            size='large'
            placeholder='Enter your confirmPassword'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Sign Up
          </Button>
        </Form.Item>

        <OrWith>
          <BlackLine />
          <StyledSpan>Or with</StyledSpan>
          <BlackLine />
        </OrWith>

        <Button type='primary'>
          <Image src={facebookIcon} alt='googleIcon' />
          Login with Facebook
        </Button>
        <Button type='default'>
          <Image src={googleIcon} alt='googleIcon' />
          Login with Google
        </Button>

        <div style={{ textAlign: 'center' }}>
          <StyledSpan>You have an account ? </StyledSpan>
          <Link to='/auth/login'>Login now!</Link>
        </div>
      </FormCustom>
    </RegisterContainer>
  )
}

export default Login

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #003f62;
  a {
    font-weight: 500;
    font-size: 16px;
    color: #160062;
  }
  button {
    width: 100%;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const OrWith = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const BlackLine = styled.div`
  flex-grow: 1;
  border: 0.4px solid rgba(49, 49, 49, 0.5);
`

export const FormCustom = styled(Form)`
  width: 450px;
  background-color: white;
  border-radius: 4px;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;

  @media screen and (max-width: 676px) {
    /* padding: 2rem 1rem;   */
  }
`

export const Image = styled.img`
  margin-right: 10px;
`

export const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  text-align: center;
`
export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #0d0e0e;
  margin-bottom: 0.5rem;
  text-align: center;
`
