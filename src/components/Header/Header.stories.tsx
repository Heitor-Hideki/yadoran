import { Header, HeaderProps } from './Header'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Header',
    component: Header,
    args: {
        active: false
    },
    argTypes: {
        active: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<HeaderProps>

export const Default: StoryObj<HeaderProps> = {}

export const Active: StoryObj<HeaderProps> = {
    args: {
        active: true
    },
    argTypes: {
        active: {
            table: {
                disable: true,
            }
        },
    }
}


