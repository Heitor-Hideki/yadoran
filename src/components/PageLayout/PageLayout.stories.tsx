import { PageLayout, PageLayoutRootProps } from './PageLayout'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/PageLayout',
    component: PageLayout.Root,
    args: {
        children: [
            <>
                <PageLayout.Header />
                <PageLayout.Navbar />
            </>
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<PageLayoutRootProps>

export const Default: StoryObj<PageLayoutRootProps> = {}

// export const ActiveNavbar:  StoryObj<PageLayoutRootProps> = {
//     args: {
//         children: [
//             <>
//                 <PageLayout.Header />
//                 <PageLayout.Navbar />
//             </>
//         ]
//     }
// } 


