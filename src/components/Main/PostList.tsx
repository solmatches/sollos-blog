import styled from '@emotion/styled'
import { useInfiniteScroll } from 'hooks/useInfiniteScroll'
import { useMemo } from 'react'

import { DEFAULT_CATEGORY } from '~/constants/category'
import { SIZE } from '~/styles'
import { CategoryListProps, PostProps } from '~/types/post'

import PostItem from './PostItem'

const PostList = function ({
  selectedCategory,
  posts,
}: {
  selectedCategory: CategoryListProps['selectedCategory']
  posts: PostProps[]
}) {
  const { target, contentList } = useInfiniteScroll(selectedCategory, posts)

  return (
    <Wrapper ref={target}>
      {contentList.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} key={id} link="https://www.google.co.kr/" />
      ))}
    </Wrapper>
  )
}

export default PostList

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: ${SIZE.content_width};
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: ${SIZE.content_width}) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
