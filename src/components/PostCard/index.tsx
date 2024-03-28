import { PostCardContainer } from './styles'
import { Text } from '../Text'

export function PostCard() {
  return (
    <PostCardContainer>
      <h3>
        JavaScript data types and data structures
        <Text size="sm" as="span">
          Há 1 dia
        </Text>
      </h3>

      <Text>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </Text>
    </PostCardContainer>
  )
}
