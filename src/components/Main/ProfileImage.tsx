import styled from '@emotion/styled'
import { SIZE } from '~/styles'

const IMAGE_SIZE = '120px'
const SMALL_IMAGE_SIZE = '80px'

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/26453878?v=4'

const ProfileImage = function () {
  return <Wrapper src={PROFILE_IMAGE_LINK} alt="프로필 사진" />
}

export default ProfileImage

const Wrapper = styled.img`
  width: ${IMAGE_SIZE};
  height: ${IMAGE_SIZE};
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: ${SIZE.content_width}) {
    width: ${SMALL_IMAGE_SIZE};
    height: ${SMALL_IMAGE_SIZE};
  }
`
