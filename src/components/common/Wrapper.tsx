import styled from 'styled-components'

export interface IWrapper {
  display?: string
  alignItems?: string
  justifyContent?: string
  flex?: string
  flexDirection?: string
  children?: any
  margin?: string
  padding?: string
}

const Wrapper: React.FC<IWrapper> = ({
  display,
  alignItems,
  justifyContent,
  flex,
  flexDirection,
  children,
  margin,
  padding
}) => {
  return (
    <WrapperCustom
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flex={flex}
      flexDirection={flexDirection}
      margin={margin}
      padding={padding}
    >
      {children}
    </WrapperCustom>
  )
}

export default Wrapper

const WrapperCustom = styled.div<IWrapper>`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`
