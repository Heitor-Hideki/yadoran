import { Text } from '@components/Text/Text';
import { Slot } from '@radix-ui/react-slot';
import React, { ReactNode } from 'react'
import { Heading } from '../Heading/Heading';

export interface MiniPokemonCardRootProps{
    children: ReactNode,
}

export interface MiniPokemonCardIconProps{
    pokemonURL: string;
}

export interface MiniPokemonCardInfosProps{
    pokemonName: string,
    nationalDex: number,
}

const MiniPokemonCardRoot = (props: MiniPokemonCardRootProps) => {
    return (
            <div className={'flex flex-row w-[400px] h-[120px] rounded px-8 py-7 items-center justify-start gap-8 bg-slowpoke-pink-900'}>
                {props.children}
            </div>
    )
}

const MiniPokemonCardIcon = (props: MiniPokemonCardIconProps) => {
    return (
        <img className='w-8 h-8 text-slowpoke-black-900' src={props.pokemonURL} alt='pokemon sprite'>
        </img> 
    )
}

const MiniPokemonCardInfos = (props: MiniPokemonCardInfosProps) => {
    return (
            <div className='flex flex-col w-full h-full'>
                <Heading size='md'>{props.pokemonName}</Heading>
                <Text size='md'>#{props.nationalDex}</Text>
            </div>
    )
}

export const MiniPokemonCard = {
    Root: MiniPokemonCardRoot,
    Icon: MiniPokemonCardIcon,
    Infos: MiniPokemonCardInfos,
}