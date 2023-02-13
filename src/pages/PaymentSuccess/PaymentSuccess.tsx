import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate('/')
  }
  return (
    <>
      <Result
        status='success'
        title=' Your Order Successfully'
        subTitle='Order Success'
        extra={[
          <Button type='primary' key='console' onClick={handleGoBack}>
            Go Back
          </Button>
        ]}
      />
    </>
  )
}

export default PaymentSuccess
