import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { COLOR, SIZE, TYPOGRAPHY } from '~/styles'

const PostContent = function ({ html }: { html: string }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent

const markdownStyle = css`
  line-height: 1.8;
  font-size: ${TYPOGRAPHY.medium};
  font-weight: 400;

  // Adjust Heading Element Style
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: ${TYPOGRAPHY.postTitle};
  }

  h2 {
    font-size: ${TYPOGRAPHY.smallTitle};
  }

  h3 {
    font-size: ${TYPOGRAPHY.subTitle};
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid ${COLOR.black};
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid ${COLOR.black};
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: ${COLOR.primary};
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: ${TYPOGRAPHY.medium};

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  @media (max-width: ${SIZE.contentWidth}) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;

    img {
      width: 100%;
    }
    hr {
      margin: 50px 0;
    }
  }
`

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${SIZE.contentWidth};
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  ${markdownStyle}
`
