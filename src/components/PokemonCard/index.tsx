import { Text } from '@components/Text/Text';
import { TypeBox } from '@components/TypeBox';
import clsx from 'clsx';
import React, { ReactNode } from 'react'
import { Heading } from '../Heading/Heading';

interface ITypes {
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }

export interface PokemonCardRootProps{
    children: ReactNode,
    className?: string
}

export interface PokemonCardImageProps{
    pokemonURL: string;
}

export interface PokemonCardInfosProps{
    nationalDex: number,
    form?: string,
    flavor_text: string,
}

export interface PokemonCardHeaderProps{
    pokemonName: string,
    types: Array<ITypes>, 
}

const PokemonCardRoot = (props: PokemonCardRootProps) => {
    return (
            <div className={clsx('flex flex-col w-[500px] h-[700px] rounded p-6 bg-slowpoke-pink-900 border-2', props.className)}>
                {props.children}
            </div>
    )
}

const PokemonCardHeader = (props: PokemonCardHeaderProps) => {
    const primary = props.types[0].type.name
    const secondary = props.types[1] ? props.types[1].type.name : ''


    return (
            <div className='flex flex-row w-full justify-between rounded'>
                <Heading size='md' className='capitalize'>{props.pokemonName}</Heading>
                <div className='flex flex-row gap-3'>
                    {
                        props.types.length === 2 &&
                        <TypeBox type={secondary}/>
                    }
                    <TypeBox type={primary}/>
                </div>
            </div>
    )
}

const PokemonCardImage = (props: PokemonCardImageProps) => {
    return (
        <img className='w-[452px] h-[350px] rounded mt-6 bg-slowpoke-beige-800' src={props.pokemonURL} alt='pokemon sprite' />
    )
}

const PokemonCardInfos = (props: PokemonCardInfosProps) => {
    return (
            <div className='flex flex-col w-full h-full overflow-hidden mt-8'>
                <Heading size='md' className='capitalize'>#{props.nationalDex}</Heading>
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