import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  product_name: string
  product_price: number
  quantity: number
  total_amount: number
}
const MyOrder = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key'
    },

    {
      title: 'Name',
      dataIndex: 'product_name',
      key: 'product_name'
    },
    {
      title: 'Price',
      dataIndex: 'product_price',
      key: 'product_price'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Total',
      dataIndex: 'total_amount',
      key: 'total_amount'
    }
  ]

  const data: DataType[] = [
    {
      key: '1',
      product_name: 'Mike',
      product_price: 32000,
      quantity: 10,
      total_amount: 10000
    },
    {
      key: '2',
      product_name: 'Mike',
      product_price: 32000,
      quantity: 10,
      total_amount: 10000
    }
  ]

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default MyOrder
