import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { useFetch } from '../../hooks/use-fetch'
import { Post } from '../../@types/post'
import { Layout } from '../../components/Layout'
import {
  ProfileContainer,
  LinksWrapper,
  PostContent,
  PostInfo,
  PostTitle,
  ProfileContent,
} from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Link } from '../../components/Link'
import { ArrowLeft } from '../../components/icons/ArrowLeft'
import { ArrowUpRightSquare } from '../../components/icons/ArrowUpRightSquare'
import { Github } from '../../components/icons/Github'
import { Calendar } from '../../components/icons/Calendar'
import { Comment } from '../../components/icons/Comment'
import dayjs from '../../lib/dayjs'
import { Skeleton } from '../../components/Skeleton'
import { Text } from '../../components/Text'

export function PostPage() {
  const { postId } = useParams()

  const { data, error, isLoading } = useFetch<Post>(
    `/repos/ggalli/ignite-github-blog/issues/${postId}`,
  )

  return (
    <Layout>
      {isLoading && <LoadingSkeleton />}
      {error && (
        <Text style={{ textAlign: 'center', marginTop: 80 }}>
          Falha ao carregar publicação
        </Text>
      )}
      {data && (
        <>
          <ProfileContainer>
            <LinksWrapper>
              <Link to="..">
                <ArrowLeft /> Voltar
              </Link>

              <Link to={data.html_url} target="_blank">
                ver no github <ArrowUpRightSquare />
              </Link>
            </LinksWrapper>

            <ProfileContent>
              <PostTitle>{data.title}</PostTitle>

              <PostInfo>
                <div>
                  <Github />
                  {data.user.login}
                </div>

                <div>
                  <Calendar />
                  {dayjs(data.created_at).fromNow()}
                </div>

                <div>
                  <Comment />
                  {data.comments} comentários
                </div>
              </PostInfo>
            </ProfileContent>
          </ProfileContainer>

          <PostContent>
            <Markdown
              className="markdown"
              remarkPlugins={[remarkBreaks]}
              components={{
                code(props) {
                  const { children, className, ...rest } = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter language="javascript" style={dracula}>
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {data.body}
            </Markdown>
          </PostContent>
        </>
      )}
    </Layout>
  )
}

function LoadingSkeleton() {
  return (
    <>
      <ProfileContainer>
        <ProfileContent>
          <PostTitle>
            <Skeleton
              style={{
                width: 600,
                height: 28,
                marginBottom: 16,
                marginTop: 24,
              }}
            />
          </PostTitle>

          <PostInfo>
            <Skeleton style={{ width: 100 }} />
            <Skeleton style={{ width: 100 }} />
            <Skeleton style={{ width: 100 }} />
          </PostInfo>
        </ProfileContent>
      </ProfileContainer>

      <PostContent>
        <Skeleton style={{ marginBottom: 8 }} />
        <Skeleton style={{ width: '90%', marginBottom: 8 }} />
        <Skeleton style={{ width: '95%', marginBottom: 8 }} />
        <Skeleton style={{ width: '85%', marginBottom: 8 }} />

        <Skeleton
          style={{ width: '50%', height: 20, marginBottom: 24, marginTop: 24 }}
        />

        <Skeleton style={{ marginBottom: 8 }} />
        <Skeleton style={{ width: '90%', marginBottom: 8 }} />
        <Skeleton style={{ width: '95%', marginBottom: 8 }} />
        <Skeleton style={{ width: '85%', marginBottom: 8 }} />
      </PostContent>
    </>
  )
}
