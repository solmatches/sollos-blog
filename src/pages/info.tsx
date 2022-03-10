import React from 'react'
import Text from 'components/Text'
import { graphql } from 'gatsby'

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPageProps) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
    </div>
  )
}

export default InfoPage

// gatsby에서는 기본적으로 pages 내부 파일, gatsbyAPI를 통해 생성해주는 페이지의 템플릿에서만 쿼리 정의가 가능하다.
// 일반 컴포넌트에서는 변수로는 정의가 불가능하고, StaticQuery 기능을 통해 정의할 수 있다.
// 쿼리를 export 하면 개츠비 내부적으로 요청을 보내고 데이터를 컴포넌트의 props.data로 전달해준다.
export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
