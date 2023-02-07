import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { productService } from '../../apis/product.api'
import { Button, Divider, Image, Rate } from 'antd'
import {
  AddOrBuy,
  ButtonCustom,
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
  StyledH2,
  StyledH3,
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

const ProductDetails = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => productService.getProductsDetails(id as string)
  })

  console.log(data, isLoading, isError)

  const [quantity, setQuantity] = useState(1)
  const [like, setLike] = useState(false)

  const handleDecrease = () => {
    setQuantity((prev) => prev - 1)
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleLike = () => {
    setLike((prev) => !prev)
  }

  return (
    <Container>
      <ContentWrapper>
        <ProductWrapper>
          <>
            <ProductImage>
              <ProductImageShow>
                <Image
                  width={'100%'}
                  height={'100%'}
                  style={{ objectFit: 'cover' }}
                  src={`http://hung.fresher.ameladev.click/${data?.data.data.images[0].product_image}`}
                />
              </ProductImageShow>
              <ProductImageDiff>
                {data?.data.data.images.slice(1, 6).map((itemImage: any) => (
                  <SubImage key={itemImage.id}>
                    <Image
                      width={'100%'}
                      height={'100%'}
                      src={`http://hung.fresher.ameladev.click/${itemImage.product_image}`}
                      style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        objectFit: 'cover'
                      }}
                    />
                  </SubImage>
                ))}
              </ProductImageDiff>
            </ProductImage>
          </>

          <ProductInfo>
            <>
              <StyledH2>{data?.data.data.name}</StyledH2>
              <StyledH3>{data?.data.data.price}VND</StyledH3>
              <StyledRating>
                <Rate allowHalf disabled value={data?.data.avgRating} />
                <StyledSpan style={{ fontWeight: '0.8rem' }}>
                  {/* {data?.data.reviews.length === 0 ? 'No reviews' : `${data?.data.reviews.length} reviews`} */}
                  No reviews
                </StyledSpan>
                <StyledSpan style={{ fontWeight: '0.8rem' }}>49 sold</StyledSpan>
              </StyledRating>
            </>

            <Divider style={{ margin: '2.5rem 0' }} />

            <QuantityWrapper>
              <StyledSpan>Quantity : </StyledSpan>
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
                <StyledButton>Add to cart</StyledButton>
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

            <Divider style={{ margin: '2.5rem 0' }} />

            <StyledCategory>
              Category:
              <StyledSpan style={{ fontWeight: 400 }}>20% off</StyledSpan>
              <StyledSpan style={{ fontWeight: 400 }}>49% off</StyledSpan>
              <StyledSpan style={{ fontWeight: 400 }}>Alex remote</StyledSpan>
            </StyledCategory>

            <StyledShare>
              Share:
              <StyledSpan style={{ fontWeight: 400 }}>
                <GoogleOutlined />
              </StyledSpan>
              <StyledSpan style={{ fontWeight: 400 }}>
                <FacebookOutlined />
              </StyledSpan>
              <StyledSpan style={{ fontWeight: 400 }}>
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
                label: <ButtonCustom>Description</ButtonCustom>,
                key: '1',
                children: <Description description={data?.data.data.description} />
              },
              {
                label: <ButtonCustom>Reviews</ButtonCustom>,
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
