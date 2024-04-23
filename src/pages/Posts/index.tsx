import { Input } from '../../components/Input'
import { Layout } from '../../components/Layout'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { useFetch } from '../../hooks/use-fetch'
import { PostsContainer, PostsSearchField } from './styles'

interface Issue {
  created_at: string
  title: string
  number: string
  body: string
  id: string
}

export function PostsPage() {
  const { data, error, isLoading } = useFetch<Issue[]>('/issues')

  return (
    <Layout>
      <Profile />

      {error ? (
        'Falha ao carregar publicações'
      ) : isLoading ? (
        'Loading...'
      ) : (
        <>
          <PostsSearchField>
            <h2>
              Publicações <span>{data?.length} publicações</span>
            </h2>

            <Input placeholder="Buscar conteúdo" />
          </PostsSearchField>

          <PostsContainer>
            {data?.map((item) => (
              <PostCard
                key={item.id}
                title={item.title}
                text={item.body}
                number={item.number}
                created_at={item.created_at}
              />
            ))}
          </PostsContainer>
        </>
      )}
    </Layout>
  )
}
