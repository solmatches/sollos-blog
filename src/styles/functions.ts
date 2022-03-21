import { css } from '@emotion/react'

export const lineClamp = (line = 2) => css`
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`
