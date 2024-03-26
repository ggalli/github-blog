import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'

export function BlogPage() {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Profile />
          <Posts />
        </Container>
      </main>
    </>
  )
}
