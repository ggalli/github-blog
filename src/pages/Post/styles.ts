import styled from 'styled-components'

export const PostContent = styled.div`
  padding: 0 40px;
  margin-top: -48px;

  .markdown {
    img {
      width: 100%;
    }

    p,
    h1,
    h2,
    h3,
    ul {
      margin-bottom: 16px;
    }

    ul {
      list-style: inside;
      margin-left: 16px;
    }
  }
`
