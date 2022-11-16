import { TextInput } from '@components/TextInput/TextInput';
import { clsx } from 'clsx'
import { MagnifyingGlass } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';


export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string,
}

export function SearchBar (props: SearchBarProps){
    return (
        <TextInput.Root className={clsx("w-full mt-3", props.className)}>
            <TextInput.Icon>
                <MagnifyingGlass/>
            </TextInput.Icon>
            <TextInput.Input {...props}/>
        </TextInput.Root>
    )
}

