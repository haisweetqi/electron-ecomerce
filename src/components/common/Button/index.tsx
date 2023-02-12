import React, { ButtonHTMLAttributes } from 'react'
import ButtonStyles from './buttonCustomStyle'

export interface IButton {
  width?: string
  height?: string
  padding?: string
  bgColor?: string
  border?: string
  borderRadius?: string
  to?: string
  fs?: string
  fw?: string | number
  color?: string
  onClick?: any
  isLoading?: boolean
  zIndex?: string
  children: any
  colorHover?: string
  fwHover?: number
  background?: string
  disabled?: any
}
const ButtonCustom: React.FC<IButton> = ({
  width,
  height,
  padding,
  bgColor,
  border,
  borderRadius,
  to,
  fs,
  fw,
  color,
  onClick = () => {},
  zIndex,
  children,
  isLoading,
  colorHover,
  fwHover,
  background,
  disabled
}) => {
  return (
    <ButtonStyles
      bgColor={bgColor}
      width={width}
      height={height}
      border={border}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      isLoading={isLoading}
      zIndex={zIndex}
      fs={fs}
      fw={fw}
      color={color}
      colorHover={colorHover}
      fwHover={fwHover}
      background={background}
      disabled={disabled}
    >
      {children}
    </ButtonStyles>
  )
}

export default ButtonCustom
