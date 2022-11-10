import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp 
            className={clsx(
            'py-3 px-4 bg-slowpoke-pink-900 rounded font-semibold text-slowpoke-gray-100 text-sm w-[400px] hover:bg-slowpoke-pink-800 transition-colors', 
            className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}