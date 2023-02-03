import React, { useContext } from 'react'
import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Container, StyledImage } from '../../Global.styled'
import { Popover, Avatar } from 'antd'
import BadgeCustom from '../common/Badge'
import SearchCustom from './../common/Search/SearchCustom'
import { AppContext } from '../../contexts/auth.context'

const Header = () => {
  const content = (
    <div style={{ width: 130 }}>
      <div>
        <StyledLink to={'/profile'}>Profile</StyledLink>
      </div>
      <div>
        <StyledLink to={'/profile'}>Your Cart</StyledLink>
      </div>
      <div>
        <StyledLink to={'/'}>Logout</StyledLink>
      </div>
    </div>
  )

  const styleBadge = {
    background: '#EDA415',
    border: 'none',
    color: '#fff'
  }
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext)
  console.log(isAuthenticated, setIsAuthenticated)
  return (
    <Wrapper>
      <Container className='container'>
        <StyledImage src={logo} alt='logo' />

        <SearchCustom placeholder='Search any things' enterButton='Search' size='large' style={{ width: 304 }} />

        <StyledUser>
          {isAuthenticated ? (
            <>
              <Popover placement='bottomRight' content={content} trigger='click'>
                <Avatar src='https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-1.jpg' size='large' />
              </Popover>
            </>
          ) : (
            // <div>{profile?.email}</div>
            <div>
              <AiOutlineUser />
              <Link to='auth/login'>Sign in</Link>
            </div>
          )}
          <div>
            <AiOutlineHeart />
            <Link to='/'>Favorites</Link>
            <BadgeCustom count={5} style={styleBadge} />
          </div>
          <div>
            <AiOutlineShoppingCart />
            <Link to='/cart'>Cart</Link>
            <BadgeCustom count={5} style={styleBadge} />
          </div>
        </StyledUser>
      </Container>
    </Wrapper>
  )
}

export default Header

export const Wrapper = styled.header`
  background-color: #003f62;
  padding: 1rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 29px;
  div {
    display: flex;
    align-items: center;
    column-gap: 12px;
    color: #fff;
    svg {
      font-size: 1.25rem;
    }
  }
`

export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 1rem;
`
