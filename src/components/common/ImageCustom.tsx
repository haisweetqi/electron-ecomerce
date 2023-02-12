import { Image } from 'antd'
import React from 'react'
import styled from 'styled-components'

export interface IImage {
  width?: number | string
  height?: number | string
  of?: string
  borderradius?: number | string
  overflow?: string
  children?: any
  src?: any
}

const ImageCustom: React.FC<IImage> = ({ width, height, of, borderradius, overflow, children, src }) => {
  return (
    <ImageCus width={width} height={height} of={of} overflow={overflow} borderradius={borderradius} src={src}>
      {children}
    </ImageCus>
  )
}

export default ImageCustom

const ImageCus = styled(Image)<IImage>`
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
  object-fit: ${(props) => props?.of};
  overflow: ${(props) => props?.overflow};
  border-radius: ${(props) => props?.borderradius};
`
