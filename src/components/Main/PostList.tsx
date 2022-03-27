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
  const matchedPosts = useMemo(() => {
    return posts.filter(
      ({
        node: {
          frontmatter: { categories },
        },
      }) => {
        return selectedCategory !== DEFAULT_CATEGORY
          ? categories.includes(selectedCategory)
          : true
      },
    )
  }, [selectedCategory])

  const { target: scrollTarget, currentItemCount } = useInfiniteScroll({
    allPostCount: matchedPosts.length,
    resetDeps: selectedCategory,
  })

  const displayPosts = matchedPosts.slice(0, currentItemCount)

  return (
    <Wrapper ref={scrollTarget}>
      {displayPosts.map(
        ({
          node: {
            id,
            frontmatter,
            fields: { slug },
          },
        }) => (
          <PostItem {...frontmatter} key={id} link={slug} />
        ),
      )}
    </Wrapper>
  )
}

export default PostList

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: ${SIZE.contentWidth};
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: ${SIZE.contentWidth}) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`
