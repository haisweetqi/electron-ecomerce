import { Badge } from 'antd'

const BadgeCustom = ({ count, style }: any) => {
  return (
    <>
      <Badge count={count} style={style} />
    </>
  )
}

export default BadgeCustom
