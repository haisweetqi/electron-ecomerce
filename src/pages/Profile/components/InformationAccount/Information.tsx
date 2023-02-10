import { UploadOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Upload } from 'antd'
// import { RcFile } from 'antd/es/upload'
import React from 'react'
import { EditForm, InputCustom, UploadWrapper } from './informationStyle'

// const beforeUpload = (file: RcFile) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!')
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!')
//   }
//   return isJpgOrPng && isLt2M
// }
const Information = () => {
  const info = [
    { key: '1', label: 'Email', placeholder: 'Email' },
    { key: '2', label: 'Name', placeholder: 'Name' },
    { key: '3', label: 'Phone', placeholder: 'Phone' },
    { key: '4', label: 'Address', placeholder: 'Address' },
    { key: '5', label: 'Birthday', placeholder: 'Birthday' }
  ]

  return (
    <EditForm>
      <Form style={{ width: '50%' }} labelCol={{ span: 4 }} wrapperCol={{ span: 24 }}>
        {info.map((itemInfo: any, index: any) => (
          <Form.Item
            key={index}
            colon={false}
            label={itemInfo.label}
            style={{
              marginBottom: '2rem'
            }}
          >
            <InputCustom placeholder={itemInfo.placeholder} />
          </Form.Item>
        ))}
      </Form>

      <UploadWrapper>
        <Avatar
          size={{ xs: 84, sm: 82, md: 90, lg: 114, xl: 120, xxl: 150 }}
          src='https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_960_720.jpg'
        />

        <Upload>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </UploadWrapper>
    </EditForm>
  )
}

export default Information
