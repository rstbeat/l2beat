import React from 'react'

import { usePageBuildContext } from '../../build/pageBuildContext'
import { PlainLink } from '../PlainLink'
import {
  DiscordIcon,
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
  XIcon,
  YouTubeIcon,
} from '../icons'

export function SocialLinks() {
  const { config } = usePageBuildContext()
  return (
    <>
      <li>
        <PlainLink href={'/'} title="Twitter">
          <XIcon />
        </PlainLink>
      </li>
      <li>
        <PlainLink href={'/'} title="Discord">
          <DiscordIcon />
        </PlainLink>
      </li>
      <li>
        <PlainLink href={'/'} title="Github">
          <GithubIcon />
        </PlainLink>
      </li>
      <li>
        <PlainLink href={'/'} title="LinkedIn">
          <LinkedInIcon />
        </PlainLink>
      </li>
      <li>
        <PlainLink href={'/'} title="YouTube">
          <YouTubeIcon />
        </PlainLink>
      </li>
      <li>
        <PlainLink href={'/'} title="Medium">
          <MediumIcon />
        </PlainLink>
      </li>
    </>
  )
}
