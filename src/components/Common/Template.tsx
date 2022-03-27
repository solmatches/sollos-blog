import styled from '@emotion/styled'
import { ReactNode } from 'react'

import Footer from './Footer'
import GlobalStyle from './GlobalStyle'

interface Props {
  children: ReactNode
}

const Template = function ({ children }: Props) {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
