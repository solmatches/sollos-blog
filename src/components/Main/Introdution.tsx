import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import { COLOR, MEDIA_QUERY, SIZE, TYPOGRAPHY } from '~/styles'

import ProfileImage from './ProfileImage'

const Introdution = function ({
  profileImage,
}: {
  profileImage: IGatsbyImageData
}) {
  return (
    <BackgroundContainer>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>안녕하세요!</SubTitle>
          <Title>블로그 준비중</Title>
        </div>
      </Wrapper>
    </BackgroundContainer>
  )
}

export default Introdution

const BackgroundContainer = styled.div`
  background-image: linear-gradient(
    60deg,
    ${COLOR.backgroundDark} 0%,
    ${COLOR.backgroundLight} 100%
  );
  color: ${COLOR.white};
`

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${SIZE.contentWidth};
  height: ${SIZE.headerHeight};
  margin: 0 auto;
  padding: 0 1.8rem;

  ${MEDIA_QUERY.mobile} {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: ${TYPOGRAPHY.subTitle};
  font-weight: 400;

  ${MEDIA_QUERY.mobile} {
    font-size: ${TYPOGRAPHY.medium};
  }
`
const Title = styled.div`
  margin-top: 5px;
  font-size: ${TYPOGRAPHY.title};
  font-weight: 700;

  ${MEDIA_QUERY.mobile} {
    font-size: ${TYPOGRAPHY.smallTitle};
  }
`
