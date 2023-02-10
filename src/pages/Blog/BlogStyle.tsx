import styled, { css } from 'styled-components'
export const Scroll = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin: 150px 0;
`

export const animation = css`
  @keyframes scrolling {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

export const StyledH2 = styled.h2`
  position: absolute;
  font-family: 'Noto Serif Ahom', serif;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 4em;
  text-align: center;
  line-height: 50px;
  color: red;
  transform: translateX(100%);
  ${animation}
  animation:scrolling 4s linear infinite;
`
