import Template from 'components/Common/Template'
import { graphql } from 'gatsby'

const PostTemplate = function () {
  return <Template>PostTemplate</Template>
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
