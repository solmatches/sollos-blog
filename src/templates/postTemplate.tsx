import Template from 'components/Common/Template'
import CommentWidget from 'components/Post/CommentWidget'
import PostContent from 'components/Post/PostContent'
import PostHead from 'components/Post/PostHead'
import { graphql } from 'gatsby'

import { PostItemProps } from '~/types/post'

interface PostItemPageProps {
  node: {
    html: string
    frontmatter: PostItemProps
  }
}

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: PostItemPageProps[]
    }
  }
}
const PostTemplate = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateProps) {
  const {
    node: {
      html,
      frontmatter: {
        summary,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
        ...frontProps
      },
    },
  } = edges[0]

  return (
    <Template>
      <PostHead {...frontProps} thumbnail={gatsbyImageData} />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

/**
 * query 에서 파라미터 받을 때
 * 1. context에서 넘겨준 파라미터명과 일치해야함
 * 2. '$'를 붙여야함
 * 3. 타입을 명시해야함
 **/
export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
