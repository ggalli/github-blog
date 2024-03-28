import { Input } from '../Input'
import { PostCard } from '../PostCard'
import { PostsContainer, PostsSearchField } from './styles'

export function Posts() {
  return (
    <>
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
    </>
  )
}
