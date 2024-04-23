import { PostCardContainer } from './styles'
import { Text } from '../Text'

interface PostCardProps {
  created_at: string
  title: string
  number: string
  text: string
}

export function PostCard({ title, text, number }: PostCardProps) {
  return (
    <PostCardContainer to={`/posts/${number}`}>
      <h3>
        {title}
        <Text size="sm" as="span">
          Há 1 dia
        </Text>
      </h3>

      <Text>{text}</Text>
    </PostCardContainer>
  )
}
