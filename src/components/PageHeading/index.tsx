import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface PageHeadingIconProps {
    children: ReactNode;
}

export interface PageHeadingProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode
    asChild?: boolean;
    className?: string;
}

function PageHeadingIcon (props: PageHeadingIconProps){
    return (
        <Slot>
            {props.children}
        </Slot> 
    )
}

function PageHeadingRoot ({ size = "md", children, asChild , className}: PageHeadingProps) {
    const Comp = asChild ? Slot : 'h2'

    return (
        <Comp 
            className={clsx(
            'text-slowpoke-black-900 font-bold font-sans', 
            {
                'text-lg': size === "sm",
                'text-xl': size === "md",
                'text-2xl': size === "lg",
            },
            className
            )}
        >
            {children}
        </Comp>
    )
}

export const PageHeading = {
    Root: PageHeadingRoot,
    Icon: PageHeadingIcon,
}