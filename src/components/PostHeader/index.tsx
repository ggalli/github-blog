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
import { Post } from '../../@types/post'
import dayjs from '../../lib/dayjs'

interface PostHeaderProps {
  data: Post
}

export function PostHeader({ data }: PostHeaderProps) {
  return (
    <Container>
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
    </Container>
  )
}
