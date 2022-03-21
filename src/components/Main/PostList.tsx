import styled from '@emotion/styled'
import { SIZE } from '~/styles'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: '포스트 제목',
  date: '2022.03.12',
  categories: ['Web', 'Frontend', 'Testing'],
  summary: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum laboriosam omnis laudantium iste tempore cupiditate inventore, aliquid earum quis quas sit ipsum commodi aperiam impedit minima, quam, recusandae laborum! Suscipit.`,
  thumbnail:
    'https://w.namu.la/s/df9e0491ae093a061cdfcfe5e2e4212fc952379a3458b7c3eb2d0dadd755ec5af0249084f230644d6e9fa6e2e869e61ea9751af003d4940d4a716999fd197e916c9aa4e60a22a2f7f2a83b91d315196f',
  link: 'https://www.google.co.kr/',
}

const PostList = function () {
  return (
    <Wrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
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
