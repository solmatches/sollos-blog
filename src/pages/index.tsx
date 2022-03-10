import React from 'react'
import { Link } from 'gatsby'
/**
 * 개츠비는 페이지가 로드되면 리소스 로드 속도를 높이기 위해 현재 페이지에서 사용되는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드한다.
 */
const Page = function () {
  return (
    <>
      <Link to="/info/">To Info</Link>
    </>
  )
}

export default Page
