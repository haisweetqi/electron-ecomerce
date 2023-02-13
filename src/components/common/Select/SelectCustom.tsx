import { Select } from 'antd'

const SelectCustom = ({ defaultValue, style, handleChange, options }: any) => {
  return (
    <>
      <Select defaultValue={defaultValue} style={style} onChange={handleChange} options={options} />
    </>
  )
}

export default SelectCustom
