import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { COLOR, lineClamp, TYPOGRAPHY } from '~/styles'
import { PostItemProps } from '~/types/post'

type PostItemType = PostItemProps & { link: string }

const PostItem = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: { publicURL },
  link,
}: PostItemType) {
  return (
    <Wrapper to={link}>
      <ThumbnailImage src={publicURL} alt="포스트 이미지" />
      <Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </Content>
    </Wrapper>
  )
}

export default PostItem

const Title = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 4px;
  font-size: ${TYPOGRAPHY.subTitle};
  font-weight: 700;

  ${lineClamp()}
`

const Date = styled.div`
  font-size: ${TYPOGRAPHY.small};
  font-weight: 400;
  opacity: 0.5;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px -6px;
`

const CategoryItem = styled.div`
  margin: 2px 6px;
  padding: 2px 6px;
  border-radius: 4px;
  background: ${COLOR.black};
  font-size: ${TYPOGRAPHY.small};
  font-weight: 700;
  color: ${COLOR.white};
`
const Summary = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: auto;
  font-size: ${TYPOGRAPHY.medium};
  opacity: 0.8;
  ${lineClamp()};
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
