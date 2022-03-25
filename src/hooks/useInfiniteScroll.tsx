import { RefObject, useEffect, useRef, useState } from 'react'

const INTITIAL_PAGE = 1

interface Props<T> {
  allPostCount: number
  perPageCount?: number
  resetDeps?: T
}

interface ReturnProps {
  target: RefObject<HTMLDivElement>
  currentItemCount: number
}

export function useInfiniteScroll<T>({
  allPostCount = 0,
  perPageCount = 5,
  resetDeps,
}: Props<T>): ReturnProps {
  const target = useRef<HTMLDivElement | null>(null)
  const [pageCount, setPageCount] = useState(INTITIAL_PAGE)

  const observer = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return
    setPageCount(count => count + 1)
    observer.disconnect()
  })

  useEffect(() => {
    setPageCount(INTITIAL_PAGE)
  }, [resetDeps])

  useEffect(() => {
    if (!target.current || !target.current.children.length) return
    if (pageCount * perPageCount >= allPostCount) return

    const { children: containerChilds } = target.current
    const lastChildren = containerChilds[containerChilds.length - 1]

    observer.observe(lastChildren)

    return () => observer.disconnect()
  }, [allPostCount, pageCount])

  return {
    target,
    currentItemCount: pageCount * perPageCount,
  }
}
