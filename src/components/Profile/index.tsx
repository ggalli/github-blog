import { Text } from '../Text'
import {
  Avatar,
  ProfileCard,
  ProfileContent,
  ProfileInfo,
  ProfileTitle,
} from './styles'

import { Github } from '../icons/Github'
import { Building } from '../icons/Building'
import { UserGroup } from '../icons/UserGroup'
import { Link } from '../Link'
import { ArrowUpRightSquare } from '../icons/ArrowUpRightSquare'
import { useFetch } from '../../hooks/use-fetch'

interface UserResponse {
  name: string
  avatar_url: string
  bio: string
  followers: string
  company?: string
  login: string
  id: string
  html_url: string
}

export function Profile() {
  const { data, error, isLoading } = useFetch<UserResponse>('/users/ggalli')

  if (error) {
    return <ProfileCard>Falha ao carregar usuário</ProfileCard>
  }

  if (isLoading) {
    return <ProfileCard style={{ height: 212 }}>Loading...</ProfileCard>
  }

  return (
    data && (
      <ProfileCard>
        <Avatar src={data.avatar_url} />

        <ProfileContent>
          <ProfileTitle>
            {data.name}
            <Link to={data.html_url} target="_blank">
              Github <ArrowUpRightSquare />{' '}
            </Link>
          </ProfileTitle>

          <Text>{data.bio}</Text>

          <ProfileInfo>
            <div>
              <Github />
              {data.login}
            </div>

            <div>
              <Building />
              {data.company || '--'}
            </div>

            <div>
              <UserGroup />
              {data.followers} seguidores
            </div>
          </ProfileInfo>
        </ProfileContent>
      </ProfileCard>
    )
  )
}
