import { Button, Form, Input, Modal, Rate } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import styled from 'styled-components'

const reviews = [
  {
    rating: 4.7,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    rating: 4.8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <ReviewsWrapper>
      <StyledH2>Customer reviews</StyledH2>
      {reviews.map((review: any, index: any) => {
        return (
          <ReviewContent key={index}>
            <StyledSpan>{review.text}</StyledSpan>
            <Rating>
              {review.rating}
              <Rate disabled allowHalf value={review.rating} style={{ marginLeft: '1rem' }} />
            </Rating>
          </ReviewContent>
        )
      })}

      <Button type='primary' size='large' onClick={showModal}>
        Write a review
      </Button>

      <Modal title='Your review' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose>
        <Form>
          <Form.Item label='Reviews'>
            <TextArea autoSize={{ minRows: 3, maxRows: 8 }} placeholder='Write your review here' />
          </Form.Item>
          <span>Đánh giá: </span>
          <Rate />
        </Form>
      </Modal>
    </ReviewsWrapper>
  )
}

export default Reviews

const ReviewsWrapper = styled.div`
  padding: 2.5rem 2rem;
  border: 1px solid #b8b8b8;
  border-radius: 20px;
`
const StyledH2 = styled.h1`
  color: #003f62;
  font-size: 1.5rem;
`
const StyledSpan = styled.span`
  color: #4f4f4f;
  font-size: 1.25rem;
`

const ReviewContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 1rem;
`
const Rating = styled.div`
  font-weight: 500;
`
