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
  const observer = useRef<IntersectionObserver | null>(null)
  const [pageCount, setPageCount] = useState(INTITIAL_PAGE)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      const [lastChild] = entries
      if (!lastChild.isIntersecting) return
      setPageCount(count => count + 1)
      observer.unobserve(lastChild.target)
    })
  }, [])

  useEffect(() => {
    setPageCount(INTITIAL_PAGE)
  }, [resetDeps])

  useEffect(() => {
    if (!target.current || !target.current.children.length) return
    if (pageCount * perPageCount >= allPostCount) return

    const { children: containerChilds } = target.current
    const lastChildren = containerChilds[containerChilds.length - 1]

    observer.current?.observe(lastChildren)

    return () => observer.current?.disconnect()
  }, [allPostCount, pageCount])

  return {
    target,
    currentItemCount: pageCount * perPageCount,
  }
}
