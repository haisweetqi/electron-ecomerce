import React, { ButtonHTMLAttributes } from 'react'
import ButtonStyles from './buttonCustomStyle'

export interface IButton {
  width?: string
  height?: string
  padding?: string
  bgcolor?: string
  border?: string
  borderradius?: string
  to?: string
  fs?: string
  fw?: string | number
  color?: string
  onClick?: any
  zindex?: string
  children: any
  colorHover?: string

  background?: string
  disabled?: any
  htmlType?: any
}
const ButtonCustom: React.FC<IButton> = ({
  width,
  height,
  padding,
  bgcolor,
  border,
  borderradius,
  to,
  fs,
  fw,
  color,
  onClick = () => {},
  zindex,
  children,
  background,
  disabled,
  htmlType
}) => {
  return (
    <ButtonStyles
      bgcolor={bgcolor}
      width={width}
      height={height}
      border={border}
      padding={padding}
      borderradius={borderradius}
      onClick={onClick}
      zindex={zindex}
      fs={fs}
      fw={fw}
      color={color}
      background={background}
      disabled={disabled}
      htmlType={htmlType}
    >
      {children}
    </ButtonStyles>
  )
}

export default ButtonCustom
