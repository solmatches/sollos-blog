import React from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introdution from 'components/Main/Introdution'
import Footer from 'components/Common/Footer'
import CategoryList from 'components/Main/CategoryList'
/**
 * 개츠비는 페이지가 로드되면 리소스 로드 속도를 높이기 위해 현재 페이지에서 사용되는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드한다.
 */

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Page = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introdution />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <Footer />
    </Container>
  )
}

export default Page

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
