import styled from '@emotion/styled'
import { createRef, useEffect } from 'react'

import { MEDIA_QUERY } from '~/styles'

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

  return <Wrapper ref={element} />
}

export default CommentWidget

const Wrapper = styled.div`
  ${MEDIA_QUERY.mobile} {
    padding: 0 20px;
  }
`
