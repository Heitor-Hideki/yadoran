import { Navbar, NavbarProps } from './Navbar'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Navbar',
    component: Navbar,
    args: {
        active: false
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<NavbarProps>

export const Default: StoryObj<NavbarProps> = {}

export const Active: StoryObj<NavbarProps> = {
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



