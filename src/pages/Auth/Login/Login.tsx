import { useRef, useContext } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import googleIcon from '../../../assets/images/google.png'
import facebookIcon from '../../../assets/images/facebook.png'
import { validateMessages } from './../../../utils/validate'
import { AppContext } from '../../../contexts/auth.context'
import { useMutation } from '@tanstack/react-query'
import { authApi } from './../../../apis/auth.api'
import { toast } from 'react-toastify'
import { useForm } from 'antd/es/form/Form'
import { LoginContainer, OrWith, BlackLine, FormCustom, Image, StyledH2, StyledSpan } from './LoginStyle'

const Login = () => {
  const navigate = useNavigate()
  const userNameRef: React.MutableRefObject<any> = useRef()
  const passwordRef: React.MutableRefObject<any> = useRef()
  const [form] = useForm()
  const { setIsAuthenticated, setProfile } = useContext(AppContext)

  /* A hook from react-query. It is a hook that allows us to make a request to the server. */
  const loginMutation = useMutation({
    mutationFn: (body: any) => authApi.login(body)
  })

  const handleLogin = (values: any) => {
    loginMutation.mutate(values, {
      onSuccess: (dataSuccess) => {
        const { data } = dataSuccess
        setIsAuthenticated(true)
        setProfile(data.user)
        navigate('/')

        toast.success('Login successful')
      },
      onError: (error: any) => {
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
        form={form}
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
