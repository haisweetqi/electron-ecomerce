import React from 'react'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message } from 'antd'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../constants/path'
import { NavBarContainer, NavbarLinkLi, NavbarLinkUl, StyledLi, Wrapper } from './NavbarStyled'
import { Container } from '../../Global.styled'

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.')
}

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.')
}

const items: MenuProps['items'] = [
  {
    label: ' menu item',
    key: '1'
  },
  {
    label: 'menu item',
    key: '2'
  },
  {
    label: 'menu item',
    key: '3'
  },

  {
    label: 'menu item',
    key: '4'
  }
]

const menuProps = {
  items,
  onClick: handleMenuClick
}

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavBarContainer>
          <Dropdown menu={menuProps}>
            <Button
              style={{
                background: '#EDA415',
                color: '#fff',
                height: '50px',
                fontSize: '1rem'
              }}
            >
              Browse categories
              <DownOutlined />
            </Button>
          </Dropdown>
          <NavbarLinkUl>
            {navLinks.map((item, index) => (
              <NavbarLinkLi key={index}>
                <NavLink to={item.path}>{item.display}</NavLink>
              </NavbarLinkLi>
            ))}
          </NavbarLinkUl>
          <StyledLi>30 Days Free Return</StyledLi>
        </NavBarContainer>
      </Container>
    </Wrapper>
  )
}

export default Navbar
