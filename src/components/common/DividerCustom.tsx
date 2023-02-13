import { Divider } from 'antd'

import styled from 'styled-components'

export interface IDivider {
  margin?: string
}

const DividerCustom: React.FC<IDivider> = ({ margin }) => {
  return <DividerCus margin={margin} />
}

export default DividerCustom

export const DividerCus = styled(Divider)<IDivider>`
  margin: ${(props) => props.margin};
`
