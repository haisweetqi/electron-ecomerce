import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  padding: 10rem 8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const StyledSpan = styled.span`
  font-size: 1rem;
  color: #222222;
`

export const StyledTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

export const ProfileInfo = styled.div`
  width: 20%;
  min-width: 15rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const UpdateProfile = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`

export const ItemWrapper = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  background-color: #f4f4f4;
  padding-bottom: 5rem;

  .ant-form-item .ant-form-item-label > label {
    font-size: 1.25rem;
  }
`
