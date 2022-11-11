import { PageLayout, PageLayoutProps } from './PageLayout'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/PageLayout',
    component: PageLayout,
    args: {
        children: []
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<PageLayoutProps>

export const Default: StoryObj<PageLayoutProps> = {}


