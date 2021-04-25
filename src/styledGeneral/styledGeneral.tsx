import styled from 'styled-components'

export const Container = styled.div.attrs(props => ({
  className: 'general-container'
}))`
  height: 100%;
  width: 90%;
  max-width: 1110px;
  margin: 0 auto;
`