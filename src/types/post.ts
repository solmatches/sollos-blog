import { IGatsbyImageData } from 'gatsby-plugin-image'

interface ImageSharpType {
  childImageSharp: { gatsbyImageData: IGatsbyImageData }
}

export interface PostHeadInfoProps {
  title: string
  date: string
  categories: string[]
}

export interface PostItemProps extends PostHeadInfoProps {
  summary: string
  thumbnail: ImageSharpType
}

export interface PostProps {
  node: {
    id: string
    frontmatter: PostItemProps
    fields: { slug: string }
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

export interface CategoryListProps {
  selectedCategory: string
  categoryList: { [key: string]: number }
}
