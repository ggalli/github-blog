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

export function Profile() {
  return (
    <ProfileCard>
      <Avatar src="https://picsum.photos/148" />

      <ProfileContent>
        <ProfileTitle>
          Cameron Williamson
          <Link>
            Github <ArrowUpRightSquare />{' '}
          </Link>
        </ProfileTitle>

        <Text>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Text>

        <ProfileInfo>
          <div>
            <Github />
            cameronwll
          </div>

          <div>
            <Building />
            Rocketseat
          </div>

          <div>
            <UserGroup />
            32 seguidores
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileCard>
  )
}
