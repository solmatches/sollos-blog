import styled from '@emotion/styled'
import Footer from 'components/Common/Footer'
import GlobalStyle from 'components/Common/GlobalStyle'
import CategoryList from 'components/Main/CategoryList'
import Introdution from 'components/Main/Introdution'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import React from 'react'

import { PostDataProps } from '~/types/post'
/**
 * 개츠비는 페이지가 로드되면 리소스 로드 속도를 높이기 위해 현재 페이지에서 사용되는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드한다.
 */

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Page = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostDataProps) {
  return (
    <Container>
      <GlobalStyle />
      <Introdution />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  )
}

export default Page

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
