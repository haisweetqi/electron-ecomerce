import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { productService } from '../../apis/product.api'
import { Button, Rate } from 'antd'
import {
  AddOrBuy,
  ContentWrapper,
  ProductImage,
  ProductImageDiff,
  ProductImageShow,
  ProductInfo,
  ProductWrapper,
  Quantity,
  QuantityWrapper,
  StyledButton,
  StyledCategory,
  StyledRating,
  StyledShare,
  StyledSpan,
  SubImage,
  TabsCustom
} from './productDetailStyle'
import {
  FacebookOutlined,
  GoogleOutlined,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'
import Description from './components/Description'
import Reviews from './components/Reviews'
import RelatedProduct from './components/RelatedProduct'
import { Container } from '../../Global.styled'
import { AppContext } from '../../contexts/auth.context'
import DividerCustom from '../../components/common/DividerCustom'
import ImageCustom from '../../components/common/ImageCustom'
import ButtonCustom from '../../components/common/Button'

const ProductDetails = () => {
  // const { cart, setCart } = useContext(AppContext)
  const { id } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => productService.getProductsDetails(id as string)
  })

  const [quantity, setQuantity] = useState(1)
  const [like, setLike] = useState(false)
  const [cart, setCart]: any = useState([])
  const product = data?.data.data

  // console.log(cart)
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      const newCart = JSON.parse(localStorage.getItem('cart') || '') || []
      setCart(newCart)
    }
  }, [])

  const handleDecrease = () => {
    setQuantity((prev) => prev - 1)
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleLike = () => {
    setLike((prev) => !prev)
  }

  const addToCart = (product: any) => {
    const updatedCart = [...cart]
    const existingItemIndex = updatedCart.findIndex((cartItem: any) => cartItem.product.id === product.id)
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += quantity
      setCart(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      const newCart = [...updatedCart, { product, quantity }]
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  return (
    <Container>
      <ContentWrapper>
        <ProductWrapper>
          <>
            <ProductImage>
              <ProductImageShow>
                <ImageCustom
                  width={'100%'}
                  height={'100%'}
                  of={'cover'}
                  src={`http://hung.fresher.ameladev.click/${data?.data.data.images[0].product_image}`}
                />
              </ProductImageShow>
              <ProductImageDiff>
                {data?.data.data.images.slice(1, 6).map((itemImage: any) => (
                  <SubImage key={itemImage.id}>
                    <ImageCustom
                      width={'100%'}
                      height={'100%'}
                      src={`http://hung.fresher.ameladev.click/${itemImage.product_image}`}
                      borderRadius={'16px'}
                      overflow={'hidden'}
                      of={'cover'}
                    />
                  </SubImage>
                ))}
              </ProductImageDiff>
            </ProductImage>
          </>

          <ProductInfo>
            <>
              <StyledSpan color='#003f62' fw={500} fs={'3rem'}>
                {data?.data.data.name}
              </StyledSpan>
              <StyledSpan color='#4a4a4a' fw={500} fs={'2.25rem'}>
                {data?.data.data.price}VND
              </StyledSpan>
              <StyledRating>
                <Rate allowHalf disabled value={data?.data.avgRating} />
                <StyledSpan>
                  {/* {data?.data.reviews.length === 0 ? 'No reviews' : `${data?.data.reviews.length} reviews`} */}
                  No reviews
                </StyledSpan>
                <StyledSpan>49 sold</StyledSpan>
              </StyledRating>
            </>

            <DividerCustom margin={'2.5rem 0'} />

            <QuantityWrapper>
              <StyledSpan fw={600}>Quantity : </StyledSpan>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Button icon={<MinusOutlined />} onClick={handleDecrease} disabled={!(quantity - 1)}></Button>
                <Quantity>{quantity}</Quantity>
                <Button icon={<PlusOutlined />} onClick={handleIncrease}></Button>
              </div>
              <StyledSpan> 499 pieces available</StyledSpan>
            </QuantityWrapper>

            <AddOrBuy>
              <>
                <StyledButton
                  onClick={() => {
                    const productList = {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: quantity
                    }
                    addToCart(productList)
                  }}
                >
                  Add to cart
                </StyledButton>
                <StyledButton>Buy it now</StyledButton>
              </>
              <Button
                onClick={handleLike}
                size='large'
                shape='circle'
                icon={<HeartOutlined />}
                style={{
                  backgroundColor: like ? 'red' : '#EEEEEE'
                }}
              />
            </AddOrBuy>

            <DividerCustom margin={'2.5rem 0'} />

            <StyledCategory>
              Category:
              <StyledSpan fw={400}>20% off</StyledSpan>
              <StyledSpan fw={400}>49% off</StyledSpan>
              <StyledSpan fw={400}>Alex remote</StyledSpan>
            </StyledCategory>

            <StyledShare>
              Share:
              <StyledSpan fw={400}>
                <GoogleOutlined />
              </StyledSpan>
              <StyledSpan fw={400}>
                <FacebookOutlined />
              </StyledSpan>
              <StyledSpan fw={400}>
                <WhatsAppOutlined />
              </StyledSpan>
            </StyledShare>
          </ProductInfo>
        </ProductWrapper>
        <>
          <TabsCustom
            defaultActiveKey='1'
            centered
            items={[
              {
                label: (
                  <ButtonCustom
                    borderRadius='1.25rem'
                    padding='1.25rem 2rem'
                    fw={500}
                    color='#003f62'
                    background='white'
                  >
                    Description
                  </ButtonCustom>
                ),
                key: '1',
                children: <Description description={data?.data.data.description} />
              },
              {
                label: (
                  <ButtonCustom
                    borderRadius='1.25rem'
                    padding='1.25rem 2rem'
                    fw={500}
                    color='#003f62'
                    background='white'
                  >
                    Reviews
                  </ButtonCustom>
                ),
                key: '2',
                children: <Reviews />
              }
            ]}
          />
        </>
        {data?.data.data && <RelatedProduct listProduct={data?.data.data} />}
      </ContentWrapper>
    </Container>
  )
}

export default ProductDetails
