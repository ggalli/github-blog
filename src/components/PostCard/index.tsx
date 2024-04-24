import { PostCardContainer } from './styles'
import { Text } from '../Text'
import dayjs from '../../lib/dayjs'

interface PostCardProps {
  createdAt: string
  title: string
  number: number
  text: string
}

export function PostCard({ title, text, number, createdAt }: PostCardProps) {
  return (
    <PostCardContainer to={`/posts/${number}`}>
      <h3>
        {title}
        <Text size="sm" as="span">
          {dayjs(createdAt).fromNow()}
        </Text>
      </h3>

      <Text>{text}</Text>
    </PostCardContainer>
  )
}
