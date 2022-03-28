import styled from '@emotion/styled'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { COLOR, lineClamp, SIZE, TYPOGRAPHY } from '~/styles'
import { PostHeadInfoProps } from '~/types/post'

const ICON_SIZE = '40px'

const PostHeadInfo = function ({ title, date, categories }: PostHeadInfoProps) {
  const goBackPage = () => window.history.back()

  return (
    <Wrapper>
      <PreviousIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PreviousIcon>
      <Title>{title}</Title>
      <PostInfo>
        <p>{date}</p>
        <p>{categories.join(' / ')}</p>
      </PostInfo>
    </Wrapper>
  )
}

export default PostHeadInfo

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${SIZE.contentWidth};
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: ${COLOR.white};
`

const PreviousIcon = styled.div`
  display: grid;
  place-items: center;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  border-radius: 50%;
  background: ${COLOR.white};
  color: ${COLOR.black};
  font-size: ${TYPOGRAPHY.subTitle};
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`
const Title = styled.div`
  display: flex;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  font-size: ${TYPOGRAPHY.titleLarge};
  font-weight: 800;
  ${lineClamp()};
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: ${TYPOGRAPHY.large};
  font-weight: 700;
`
