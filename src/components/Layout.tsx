import { PropsWithChildren } from 'react'
import { Container } from './Container'
import { Header } from './Header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
