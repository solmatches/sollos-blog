import { RefObject, useEffect, useMemo, useRef, useState } from 'react'

import { DEFAULT_CATEGORY } from '~/constants/category'
import { CategoryListProps, PostProps } from '~/types/post'

const ITEMS_PER_PAGE = 5
const INTITIAL_PAGE = 1

type RefType = HTMLDivElement

interface ReturnProps {
  target: RefObject<RefType>
  contentList: PostProps[]
}

export function useInfiniteScroll(
  selectedCategory: CategoryListProps['selectedCategory'],
  posts: PostProps[],
): ReturnProps {
  const target = useRef<RefType | null>(null)
  const [pageCount, setPageCount] = useState(INTITIAL_PAGE)

  const postListdata = useMemo(() => {
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

  const observer = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return
    setPageCount(value => value + 1)
    observer.disconnect()
  })

  useEffect(() => {
    setPageCount(INTITIAL_PAGE)
  }, [selectedCategory])

  useEffect(() => {
    if (!target.current || !target.current.children.length) return
    if (ITEMS_PER_PAGE * pageCount >= postListdata.length) return

    const { children: containerChilds } = target.current
    const lastChildren = containerChilds[containerChilds.length - 1]

    observer.observe(lastChildren)
  }, [pageCount, selectedCategory])

  return {
    target,
    contentList: postListdata.slice(0, pageCount * ITEMS_PER_PAGE),
  }
}
