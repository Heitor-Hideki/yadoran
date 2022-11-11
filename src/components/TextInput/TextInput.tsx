import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextInputRootProps {
    children: ReactNode;
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputRoot (props: TextInputRootProps){
    return (
        <div className=
        'flex items-center gap-3 py-4 px-3 h-12 rounded bg-slowpoke-white-900 focus-within:ring-2 ring-slowpoke-pink-900 outline-none'
        >
            {props.children}
        </div>
    )
}

function TextInputIcon (props: TextInputIconProps){
    return (
        <Slot className='w-6 h-6 text-slowpoke-gray-100'>
            {props.children}
        </Slot> 
    )
}

function TextInputInput(props: TextInputInputProps) {
    return (
            <input 
                className={'bg-transparent flex-1 text-slowpoke-black-900 text-xs placeholder:text-slowpoke-gray-100 outline-none'}
                {...props}
            />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}