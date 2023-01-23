import type { Meta, StoryObj } from '@storybook/react'

import { Box, Input, InputProps, Text } from '@claudio-lins-ui/react'

export default {
  title: 'Form/Input',
  component: Input,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
