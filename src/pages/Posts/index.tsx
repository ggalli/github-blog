import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { PostsContainer, PostsSearchField } from './styles'

export function PostsPage() {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Profile />

          <PostsSearchField>
            <h2>
              Publicações <span>6 publicações</span>
            </h2>

            <Input placeholder="Buscar conteúdo" />
          </PostsSearchField>

          <PostsContainer>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </PostsContainer>
        </Container>
      </main>
    </>
  )
}
