import { IButton } from './index'
import styled from 'styled-components'
import { Button } from 'antd'

const ButtonStyles = styled(Button)<IButton>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  background: ${(props) => props.background};

  :hover {
    color: ${(props) => props.colorHover} !important;
    font-weight: ${(props) => props.fwHover} !important;
  }
`

export default ButtonStyles
