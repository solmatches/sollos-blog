import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { SIZE, TYPOGRAPHY } from '~/styles'
import { CategoryListProps } from '~/types/post'

const CategoryList = function ({
  selectedCategory,
  categoryList,
}: CategoryListProps) {
  return (
    <Wrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          key={name}
          to={`/?category=${name}`}
          active={name === selectedCategory}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </Wrapper>
  )
}

export default CategoryList

const CategoryItem = styled(Link, {
  shouldForwardProp: prop => prop !== 'active',
})<{ active: boolean }>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: ${TYPOGRAPHY.large};
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: ${SIZE.content_width}) {
    font-size: ${TYPOGRAPHY.medium};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${SIZE.content_width};
  margin: 100px auto 0;

  @media (max-width: ${SIZE.content_width}) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
