import { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Avatar, Button, Form, Radio, RadioChangeEvent, Spin, Upload } from 'antd'
import { userService } from '../../../../apis/user.api'
import { EditForm, InputCustom, UploadWrapper } from './informationStyle'


const Information = () => {
  const marginBottom = { marginBottom: '2rem' }
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['user_account'],
    queryFn: () => {
      return userService.getUserAccount()
    }
  })
  const user = data?.data.data
  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }

  if (isLoading) {
    return (
      <div>
        <Spin />
      </div>
    )
  }

  if (isError) {
    return <div>Error...</div>
  }

  return (
    <EditForm>
      <Form style={{ width: '50%' }} labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
        <Form.Item colon={false} style={marginBottom} label={'Name'}>
          <InputCustom placeholder={'Name'} value={user.name} />
        </Form.Item>

        <Form.Item colon={false} style={marginBottom} label={'Email'}>
          <InputCustom placeholder={'Email'} value={user.email} />
        </Form.Item>

        <Form.Item colon={false} style={marginBottom} label={'Phone'}>
          <InputCustom placeholder={'Phone'} value={user.phone} />
        </Form.Item>

        <Form.Item colon={false} style={marginBottom} label={'Address'}>
          <InputCustom placeholder={'Address'} value={user.address} />
        </Form.Item>

        <Form.Item colon={false} style={marginBottom} label={'Birthday'}>
          <InputCustom placeholder={'Birthday'} value={user.dob} />
        </Form.Item>

        <Form.Item colon={false} style={marginBottom} label={'Gender'}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Nam</Radio>
            <Radio value={2}>Nu</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>

      <UploadWrapper>
        <Avatar size={{ xs: 84, sm: 82, md: 90, lg: 114, xl: 120, xxl: 150 }} src={user.image} />

        <Upload>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </UploadWrapper>
    </EditForm>
  )
}

export default Information
