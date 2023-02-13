import { BookOutlined, CompassOutlined, UserOutlined } from '@ant-design/icons'
import { Divider, Tabs } from 'antd'
import ButtonCustom from '../../components/common/Button'
import ChangePassword from './components/ChangePassword'
import Information from './components/InformationAccount'
import MyOrder from './components/MyOrder/MyOrder'
import { ItemWrapper, ProfileWrapper, StyledSpan, StyledTitle } from './profileStyle'

const Profile = () => {
  const items: any = [
    {
      label: (
        <span>
          <UserOutlined />
          Information Account
        </span>
      ),
      title: 'Profile',
      children: <Information />,
      isChange: true
    },
    {
      label: (
        <span>
          <CompassOutlined />
          Change PassWord
        </span>
      ),
      title: 'Change PassWord',
      children: <ChangePassword />,
      isChange: true
    },
    {
      label: (
        <span>
          <BookOutlined />
          My Order
        </span>
      ),
      title: 'My Order',
      children: <MyOrder />,
      isChange: false
    }
  ]
  return (
    <ProfileWrapper>
      <StyledTitle color='#003f62'>My Profile</StyledTitle>

      <Tabs
        tabPosition={'left'}
        size={'large'}
        items={items.map((item: any, index: any) => {
          const id = String(index + 1)

          return {
            label: item.label,
            key: id,
            children: (
              <ItemWrapper>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledSpan>Manage profile information for account security</StyledSpan>

                <Divider />

                {item.children}
                {item.isChange && (
                  <ButtonCustom
                    bgcolor='#EDA415'
                    width='8.25rem'
                    height='3.5rem'
                    borderradius='1.25rem'
                    border='none'
                    fw='600'
                    color='#FFFFFF'
                  >
                    Save
                  </ButtonCustom>
                )}
              </ItemWrapper>
            )
          }
        })}
      />
      {/* </ProfileInfo> */}
    </ProfileWrapper>
  )
}

export default Profile
