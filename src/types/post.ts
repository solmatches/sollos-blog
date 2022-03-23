import { IGatsbyImageData } from 'gatsby-plugin-image'

interface ImageSharpType {
  childImageSharp: { gatsbyImageData: IGatsbyImageData }
}

export interface PostItemProps {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: ImageSharpType
}

export interface PostProps {
  node: {
    id: string
    frontmatter: PostItemProps
  }
}

export interface PostDataProps {
  data: {
    allMarkdownRemark: {
      edges: PostProps[]
    }
    file: ImageSharpType
  }
}
