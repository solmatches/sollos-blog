import { css } from '@emotion/react'

import { SIZE } from './constants'

export const lineClamp = (line = 2) => css`
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`
export const mediaQuery = (size: string) => {
  return `@media (max-width: ${size})`
}
