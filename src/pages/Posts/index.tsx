import { useSearchParams } from 'react-router-dom'
import { PostsResponse } from '../../@types/post'
import { Input } from '../../components/Input'
import { Layout } from '../../components/Layout'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { useFetch } from '../../hooks/use-fetch'
import { PostsContainer, PostsSearchField } from './styles'
import { FormEvent, useState } from 'react'

export function PostsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const [search, setSearch] = useState(query)

  const { data, error, isLoading } = useFetch<PostsResponse>(
    `/search/issues?q=${query} repo:ggalli/ignite-github-blog`,
  )
  function handleSearchPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (search) {
      searchParams.set('q', search)
      setSearchParams(searchParams)
    } else {
      setSearchParams()
    }
  }

  const posts = data?.items

  return (
    <Layout>
      <Profile />

      {error && 'Falha ao carregar publicações'}
      {isLoading && 'Loading...'}
      {posts && (
        <>
          <PostsSearchField onSubmit={handleSearchPost}>
            <h2>
              Publicações <span>{posts.length} publicações</span>
            </h2>

            <Input
              placeholder="Buscar conteúdo"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </PostsSearchField>

          <PostsContainer>
            {posts.length > 0
              ? posts.map((item) => (
                  <PostCard
                    key={item.id}
                    title={item.title}
                    text={removeSpecialChars(item.body)}
                    number={item.number}
                    createdAt={item.created_at}
                  />
                ))
              : 'Nenhuma publicação encontrada'}
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
