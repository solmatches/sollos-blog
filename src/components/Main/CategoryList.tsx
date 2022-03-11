import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { SIZE, TYPOGRAPHY } from '~/constants'

interface Props {
  selectedCategory: string
  categoryList: { [key: string]: number }
}

const CategoryList = function ({ selectedCategory, categoryList }: Props) {
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

const CategoryItem = styled(Link)<{ active: boolean }>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: ${TYPOGRAPHY.large};
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${SIZE.content_width};
  margin: 100px auto 0;
`
