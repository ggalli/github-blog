import { Input } from '../Input'
import { PostsContainer, PostsHeader } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <PostsHeader>
        <h2>
          Publicações <span>6 publicações</span>
        </h2>

        <Input placeholder="Buscar conteúdo" />
      </PostsHeader>
    </PostsContainer>
  )
}
