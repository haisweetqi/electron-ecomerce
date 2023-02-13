import { Form, Input } from 'antd'

import styled from 'styled-components'

const ChangePassword = () => {
  const change = [
    { label: 'Password', placeholder: 'Password' },
    { label: 'New Password', placeholder: 'New Password' },
    { label: 'Confirm Password', placeholder: 'Confirm Password' }
  ]

  return (
    <Form style={{ width: '50%' }} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
      {change.map((itemChange: any, index: any) => (
        <Form.Item
          key={index}
          colon={false}
          label={itemChange.label}
          style={{
            marginBottom: '2rem'
          }}
        >
          <InputCustom placeholder={itemChange.placeholder} />
        </Form.Item>
      ))}
    </Form>
  )
}

export default ChangePassword
const InputCustom = styled(Input.Password)`
  border-radius: 1rem;
  margin-left: 5rem;
`
