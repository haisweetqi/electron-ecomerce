import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Container, StyledImage } from '../../Global.styled'
import { Popover, Avatar, Button } from 'antd'
import BadgeCustom from '../common/Badge'
import SearchCustom from './../common/Search/SearchCustom'
import { AppContext } from '../../contexts/auth.context'
import { setCartToLS, setProfileToLS } from '../../utils/auth'
import { useMutation } from '@tanstack/react-query'
import { authApi } from '../../apis/auth.api'

const styleBadge = {
  background: '#EDA415',
  border: 'none',
  color: '#fff'
}

const Header = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '') || []
  // const cart: any = []
  const navigate = useNavigate()
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext)

  const [cartLength, setCartLength] = useState(cart.length)
  useEffect(() => {
    setCartLength(cart.reduce((acc, item) => acc + item.quantity, 0))
  }, [cart])

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: (data) => {
      setIsAuthenticated(false)
      setProfileToLS(null)
      // setCartToLS([])

      navigate('/auth/login')
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  const content = (
    <div style={{ width: 130 }}>
      <div>
        <StyledLink to={'/profile'}>Profile</StyledLink>
      </div>
      <div>
        <StyledLink to={'/profile'}>Your Cart</StyledLink>
      </div>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  )

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
              <Link to='/auth/login'>Sign in</Link>
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
            <BadgeCustom count={cartLength} style={styleBadge} />
          </div>
        </StyledUser>
      </Container>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  background-color: #003f62;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const StyledUser = styled.div`
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
