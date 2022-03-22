export interface PostItemProps {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: { publicURL: string }
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
  }
}
