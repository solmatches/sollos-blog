import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { MEDIA_QUERY } from '~/styles'

const IMAGE_SIZE = '120px'
const SMALL_IMAGE_SIZE = '80px'

const ProfileImage = function ({
  profileImage,
}: {
  profileImage: IGatsbyImageData
}) {
  return <Wrapper image={profileImage} alt="프로필 사진" />
}

export default ProfileImage

const Wrapper = styled(GatsbyImage)`
  width: ${IMAGE_SIZE};
  height: ${IMAGE_SIZE};
  margin-bottom: 30px;
  border-radius: 50%;

  ${MEDIA_QUERY.mobile} {
    width: ${SMALL_IMAGE_SIZE};
    height: ${SMALL_IMAGE_SIZE};
  }
`
