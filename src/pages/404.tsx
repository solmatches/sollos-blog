import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { Link } from 'gatsby'

import { MEDIA_QUERY, TYPOGRAPHY } from '~/styles'

// TODO: 다른 컨텐츠 목록 불러와서 나열하기
const NotFoundPage = function () {
  return (
    <Wrapper>
      <GlobalStyle />
      <NotFoundText>404</NotFoundText>
      <NotFoundDescription>
        찾을 수 없는 페이지 입니다.
        <br />
        다른 콘텐츠를 보러 가시겠어요?
      </NotFoundDescription>
      <GoToMainButton to="/">메인으로</GoToMainButton>
    </Wrapper>
  )
}

export default NotFoundPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const NotFoundText = styled.p`
  font-size: 15rem;
  font-weight: 800;

  ${MEDIA_QUERY.mobile} {
    font-size: 10rem;
  }
`

const NotFoundDescription = styled.div`
  font-size: ${TYPOGRAPHY.smallTitle};
  text-align: center;
  line-height: 1.25;
  ${MEDIA_QUERY.mobile} {
    font-size: ${TYPOGRAPHY.subTitle};
  }
`

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: ${TYPOGRAPHY.subTitle};
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`
