import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@claudio-lins-ui/react'

export default {
  title: 'Data dislay/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/claudio-lins.png',
    alt: 'Avatar do Claudio Lins',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
