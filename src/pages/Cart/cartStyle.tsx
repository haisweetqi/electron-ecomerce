import { Button } from 'antd'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: 6rem 0;
  display: flex;
  column-gap: 2rem;
  flex-wrap: wrap;

  .ant-table-thead {
    background: #e2f4ff;
  }
`

export const StyledH3 = styled.h3`
  background: #e2f4ff;
  text-align: center;
  color: #232323;
  font-weight: 600;
  padding: 1rem 0;
`

export const StyledCartTotal = styled.div`
  position: sticky;
  top: 154px;
  bottom: 0px;

  flex: 1;
  height: 100%;
  border: 1px solid #c3c3c3;
  @media screen and (max-width: 998px) {
    margin-top: 2rem;
  }
`

export const StyledCartTotalCheckout = styled.div`
  display: flex;
  height: 100%;
  padding: 0 1rem;
  /* justify-content: space-evenly; */
  flex-direction: column;
`
