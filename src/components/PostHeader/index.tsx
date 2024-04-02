import { Link } from '../Link'
import {
  Container,
  ProfileContent,
  PostInfo,
  PostTitle,
  LinksWrapper,
} from './styles'
import { Github } from '../icons/Github'
import { ArrowUpRightSquare } from '../icons/ArrowUpRightSquare'
import { ArrowLeft } from '../icons/ArrowLeft'
import { Calendar } from '../icons/Calendar'
import { Comment } from '../icons/Comment'

export function PostHeader() {
  return (
    <Container>
      <LinksWrapper>
        <Link>
          <ArrowLeft /> Voltar
        </Link>

        <Link>
          ver no github <ArrowUpRightSquare />
        </Link>
      </LinksWrapper>

      <ProfileContent>
        <PostTitle>JavaScript data types and data structures</PostTitle>

        <PostInfo>
          <div>
            <Github />
            cameronwll
          </div>

          <div>
            <Calendar />
            Há 1 dia
          </div>

          <div>
            <Comment />5 comentários
          </div>
        </PostInfo>
      </ProfileContent>
    </Container>
  )
}
