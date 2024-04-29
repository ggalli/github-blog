import { PostsResponse } from '../../@types/post'
import { Input } from '../../components/Input'
import { Layout } from '../../components/Layout'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { useFetch } from '../../hooks/use-fetch'
import { PostsContainer, PostsSearchField } from './styles'

export function PostsPage() {
  const { data, error, isLoading } = useFetch<PostsResponse>(
    '/search/issues?q=repo:ggalli/ignite-github-blog',
  )

  const posts = data?.items

  return (
    <Layout>
      <Profile />

      {error && 'Falha ao carregar publicações'}
      {isLoading && 'Loading...'}
      {posts && (
        <>
          <PostsSearchField>
            <h2>
              Publicações <span>{posts.length} publicações</span>
            </h2>

            <Input placeholder="Buscar conteúdo" />
          </PostsSearchField>

          <PostsContainer>
            {posts.map((item) => (
              <PostCard
                key={item.id}
                title={item.title}
                text={removeSpecialChars(item.body)}
                number={item.number}
                createdAt={item.created_at}
              />
            ))}
          </PostsContainer>
        </>
      )}
    </Layout>
  )
}

function removeSpecialChars(string: string) {
  const regex = /[@#$%&*{}|]/g
  return string.replace(regex, '')
}
