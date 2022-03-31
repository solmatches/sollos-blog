import Template from 'components/Common/Template'
import CategoryList from 'components/Main/CategoryList'
import Introdution from 'components/Main/Introdution'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'
import React, { useMemo } from 'react'

import { DEFAULT_CATEGORY } from '~/constants/category'
import { CategoryListProps, PostDataProps } from '~/types/post'
/**
 * 개츠비는 페이지가 로드되면 리소스 로드 속도를 높이기 위해 현재 페이지에서 사용되는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드한다.
 */

type PageProps = PostDataProps & { location: { search: string } }

const Page = function ({
  location: { search },
  data: {
    site: { siteMetadata },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: PageProps) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? DEFAULT_CATEGORY
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          },
        ) => {
          categories.forEach(category => {
            if (typeof list[category] === 'undefined') list[category] = 1
            else list[category]++
          })

          list[DEFAULT_CATEGORY]++
          return list
        },
        { [DEFAULT_CATEGORY]: 0 },
      ),
    [],
  )

  return (
    <Template {...siteMetadata} url={siteMetadata.stieUrl} image={publicURL}>
      <Introdution profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  )
}

export default Page

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
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
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
