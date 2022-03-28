import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { SIZE } from '~/styles'

const PostHead = function ({ thumbnail }: { thumbnail: IGatsbyImageData }) {
  return (
    <Wrapper>
      <BackgroundImage image={thumbnail} alt="포스트 썸네일" />
    </Wrapper>
  )
}

export default PostHead

const Wrapper = styled.div`
  position: relative;
  height: ${SIZE.headerHeight};
`

const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: ${SIZE.headerHeight};
  object-fit: cover;
  filter: brightness(0.25);
`
