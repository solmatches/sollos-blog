import styled from '@emotion/styled'

import { MEDIA_QUERY, TYPOGRAPHY } from '~/styles'

const Footer = function () {
  return <Wrapper>방문해주셔서 감사합니다! 많이 웃는 하루되세요!😊</Wrapper>
}

export default Footer

const Wrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 20px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  ${MEDIA_QUERY.mobile} {
    font-size: ${TYPOGRAPHY.small};
  }
`
