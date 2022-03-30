import styled from '@emotion/styled'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { COLOR, lineClamp, MEDIA_QUERY, SIZE, TYPOGRAPHY } from '~/styles'
import { PostHeadInfoProps } from '~/types/post'

const ICON_SIZE = '40px'
const ICON_SIZE_MOBILE = '30px'

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

  ${MEDIA_QUERY.mobile} {
    width: 100%;
    padding: 40px 20px;
  }
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

  ${MEDIA_QUERY.mobile} {
    width: ${ICON_SIZE_MOBILE};
    height: ${ICON_SIZE_MOBILE};
    font-size: ${TYPOGRAPHY.large};
  }
`
const Title = styled.div`
  display: flex;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  font-size: ${TYPOGRAPHY.largeTitle};
  font-weight: 800;
  ${lineClamp()};

  ${MEDIA_QUERY.mobile} {
    font-size: ${TYPOGRAPHY.postTitle};
  }
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: ${TYPOGRAPHY.large};
  font-weight: 700;

  ${MEDIA_QUERY.mobile} {
    flex-direction: column;
    align-items: flex-start;
    font-size: ${TYPOGRAPHY.medium};
    font-weight: 400;
  }
`
