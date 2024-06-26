import { Meta, StoryObj } from '@storybook/react'

import { onlyDesktopModes } from '../../.storybook/modes'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  component: Link,
  parameters: {
    chromatic: {
      modes: onlyDesktopModes,
    },
  },
}
export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {
    children: 'Example link',
  },
}

export const Danger: Story = {
  args: {
    children: 'Example link',
    type: 'danger',
  },
}

export const Plain: Story = {
  args: {
    children: 'Example link',
    type: 'plain',
  },
}

export const WithArrow: Story = {
  args: {
    children: 'Example link',
    showArrow: true,
  },
}

export const WithoutUnderline: Story = {
  args: {
    children: 'Example link',
    underline: false,
  },
}

export const Highlighted: Story = {
  args: {
    children: 'Example link',
    'data-role': 'etherscan-link',
    'data-state': 'highlighted',
  },
}
