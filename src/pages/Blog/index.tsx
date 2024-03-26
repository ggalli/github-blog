import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'

export function BlogPage() {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Profile />
        </Container>
      </main>
    </>
  )
}
