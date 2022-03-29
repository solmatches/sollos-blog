import { createRef, useEffect } from 'react'

interface UtterancesAttributesType {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const CommentWidget = function () {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (!element.current) return

    const utterances = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src: 'https://utteranc.es/client.js',
      repo: 'solmatches/sollos-blog',
      'issue-term': 'pathname',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]: [string, string]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <div ref={element} />
}

export default CommentWidget
