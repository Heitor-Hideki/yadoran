import { Text } from '@components/Text/Text';
import { TypeBox } from '@components/TypeBox';
import React, { ReactNode } from 'react'
import { Heading } from '../Heading/Heading';

export interface PokemonCardRootProps{
    children: ReactNode,
}

export interface PokemonCardImageProps{
    pokemonURL: string;
}

export interface PokemonCardInfosProps{
    nationalDex: number,
    form: string,
    flavor_text: string,
}

export interface PokemonCardHeaderProps{
    pokemonName: string,
    primaryType: string,
    secondaryType?: string
}

const PokemonCardRoot = (props: PokemonCardRootProps) => {
    return (
            <div className={'flex flex-col w-[500px] h-[700px] rounded p-6 bg-slowpoke-pink-800 border-2 border-b-slowpoke-white-900'}>
                {props.children}
            </div>
    )
}

const PokemonCardHeader = (props: PokemonCardHeaderProps) => {
    return (
            <div className='flex flex-row w-full justify-between rounded'>
                <Heading size='md'>{props.pokemonName}</Heading>
                <div className='flex flex-row gap-3'>
                    {
                        props.secondaryType &&
                        <TypeBox type={props.secondaryType}/>
                    }
                    <TypeBox type={props.primaryType}/>
                </div>
            </div>
    )
}

const PokemonCardImage = (props: PokemonCardImageProps) => {
    return (
        <img className='w-[452px] h-[250px] rounded mt-6' src={props.pokemonURL} alt='pokemon sprite' />
    )
}

const PokemonCardInfos = (props: PokemonCardInfosProps) => {
    return (
            <div className='flex flex-col w-full h-full capitalize overflow-hidden mt-8'>
                <Heading size='md'>#{props.nationalDex}</Heading>
                <Heading size='md'>{props.form}</Heading>
                <Text size='md'>{props.flavor_text}</Text>
            </div>
    )
}

export const PokemonCard = {
    Root: PokemonCardRoot,
    Header: PokemonCardHeader,
    Image: PokemonCardImage,
    Infos: PokemonCardInfos,
}