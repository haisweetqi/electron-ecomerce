import { useQuery } from '@tanstack/react-query'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { userService } from '../../../../apis/user.api'
import moment from 'moment'
import { formatCurrency } from './../../../../utils/rule'
import { currencyType } from '../../../../constants/consants'
interface Order {
  key: string
  name: string
  price: number
  order_products: Object[]
}
const MyOrder = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return userService.getUserAccount()
    }
  })

  const dataSource = data?.data.data

  const columns: ColumnsType<Order> = [
    {
      title: 'Id',

      key: 'key',
      render: (text: any, record: any, index) => <>{index + 1}</>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      key: 'price',
      render: (_: any, record: any) => (
        <>
          {formatCurrency(record.price)} {currencyType}
        </>
      )
    },
    {
      title: 'Quantity',
      key: 'quantity',
      render: (_: any, { order_products }: any) => (
        <>
          {order_products.map((item: any) => (
            <p key={item.id}>{item.quantity}</p>
          ))}
        </>
      )
    },
    {
      title: 'Create_At',
      key: 'created_at',
      render: (_: any, { order_products }: any) => (
        <>
          {order_products.map((item: any) => (
            <p>{moment(item.created_at).format('LLLL')}</p>
          ))}
        </>
      )
    },
    {
      title: 'Total',
      key: 'price',
      render: (_: any, record: any) => (
        <>
          {record.order_products.map((item: any) => (
            <p>
              {formatCurrency(record.price * item.quantity)} {currencyType}
            </p>
          ))}
        </>
      )
    }
  ]

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 4
        }}
      />
    </>
  )
}

export default MyOrder
