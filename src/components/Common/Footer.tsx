import styled from '@emotion/styled'

const Footer = function () {
  return <Wrapper>방문해주셔서 감사합니다! 많이 웃는 하루되세요!😊</Wrapper>
}

export default Footer

const Wrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`
