import styled from 'styled-components'
export const HomeWraper = styled.div`
  font-size: 50px;
  color: red;
  .title {
      font-size: 30px;
      color: green;
  }
  .banner {
      background-color: blue;
      span {
          color: #fff;
          /* 表示是span元素并且是active */
          &.active {
            color: red;   
          }
          /* 伪类 */
          &:hover {
              color: green;
          }
          /* 伪元素 */
          &::after {
              content: "你好"
          }
      }
  }
`