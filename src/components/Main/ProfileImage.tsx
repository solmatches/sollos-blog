import styled from '@emotion/styled'

const IMAGE_SIZE = '120px'

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
`
