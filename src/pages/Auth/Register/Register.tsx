import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import googleIcon from '../../../assets/images/google.png'
import facebookIcon from '../../../assets/images/facebook.png'
import { useMutation } from '@tanstack/react-query'
import { authApi } from './../../../apis/auth.api'
import { toast } from 'react-toastify'
import HttpStatusCode from './../../../constants/httpStatusCode'
import { FormCustom, RegisterContainer, StyledH2, StyledSpan, OrWith, BlackLine, Image } from './RegisterStyle'

const Register = () => {
  const navigate = useNavigate()
  /* A hook from react-query. It is a hook that allows us to make a request to the server. */
  const registerMutation = useMutation({
    mutationFn: (body: any) => authApi.register(body)
  })

  const handleRegister = (values: any) => {
    registerMutation.mutate(values, {
      onSuccess: (dataSuccess) => {
        const { data } = dataSuccess
        if (data.status === HttpStatusCode.Ok) {
          navigate('/auth/login')
          toast.success('Register successful')
        }
      },
      onError: (error: any) => {
        toast.error(error.response.data.message)
      }
    })
  }

  return (
    <RegisterContainer>
      <FormCustom size='large' name='normal_login' className='login-form' onFinish={handleRegister} layout='vertical'>
        <StyledH2>Create an account</StyledH2>
        <StyledSpan>Connect with your friends today!</StyledSpan>

        <Form.Item name='name'>
          <Input size='large' placeholder='Name' />
        </Form.Item>

        <Form.Item name='email'>
          <Input size='large' placeholder='Email' />
        </Form.Item>

        <Form.Item name='password'>
          <Input.Password
            size='large'
            placeholder='Enter your password'
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

export default Register
