import { PropsWithChildren } from 'react'
import { Container } from './Container'
import { Header } from './Header'
import styled from 'styled-components'

const Main = styled.main`
  padding-bottom: 3rem;
`

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  )
}
