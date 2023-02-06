import { useRef, useContext } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import googleIcon from '../../../assets/images/google.png'
import facebookIcon from '../../../assets/images/facebook.png'
import styled from 'styled-components'
import { validateMessages } from './../../../utils/validate'
import { AppContext } from '../../../contexts/auth.context'
import { useMutation } from '@tanstack/react-query'
import { authApi } from './../../../apis/auth.api'
import { toast } from 'react-toastify'
import HttpStatusCode from '../../../constants/httpStatusCode'

const Login = () => {
  const navigate = useNavigate()
  const userNameRef: React.MutableRefObject<any> = useRef()
  const passwordRef: React.MutableRefObject<any> = useRef()

  const { setIsAuthenticated, setProfile } = useContext(AppContext)

  /* A hook from react-query. It is a hook that allows us to make a request to the server. */
  const loginMutation = useMutation({
    mutationFn: (body: any) => authApi.login(body)
  })

  const handleLogin = (values: any) => {
    loginMutation.mutate(values, {
      onSuccess: (dataSuccess) => {
        const { data } = dataSuccess
        if (data.status === 'success') {
          setIsAuthenticated(true)
          setProfile(data.user)
          navigate('/')
          toast.success('Login successful')
        }
      },
      onError: (error: any) => {
        console.log(error)

        toast.error(error.response.data.message)
      }
    })
  }

  const handleUsernameKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      passwordRef.current.focus()
    }
  }

  const handlePasswordKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleLogin('1')
    }
  }

  return (
    <LoginContainer>
      <FormCustom
        size='large'
        layout='vertical'
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish={handleLogin}
        validateMessages={validateMessages}
      >
        <StyledH2>Hi, Welcome Back! 👋</StyledH2>

        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              pattern: /^\S+@\S+\.\S+$/
            }
          ]}
        >
          <Input size='large' placeholder='Username' ref={userNameRef} onKeyDown={handleUsernameKeyDown} />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              min: 8,
              max: 20
            }
          ]}
        >
          <Input.Password
            size='large'
            placeholder='Enter your password'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            ref={passwordRef}
            onKeyDown={handlePasswordKeyDown}
          />
        </Form.Item>

        <Form.Item
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Form.Item name='remember' valuePropName='noChecked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Login
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

        <div>
          <StyledSpan>Don't have an account ? </StyledSpan>
          <Link to='/auth/register'>Sign up now!</Link>
        </div>
      </FormCustom>
    </LoginContainer>
  )
}

export default Login

export const LoginContainer = styled.div`
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
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const OrWith = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
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
`

export const Image = styled.img`
  margin-right: 10px;
`

export const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 1rem;
`
export const StyledH3 = styled.h3`
  font-weight: 400;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
`
export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #0d0e0e;
`
