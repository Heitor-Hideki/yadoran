import { Text } from '@components/Text/Text';
import clsx from 'clsx';
import { Question } from 'phosphor-react';
import React, { AllHTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading/Heading';

interface ITypes {
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }

export interface MiniPokemonCardRootProps extends AllHTMLAttributes<HTMLDivElement>{
    children: ReactNode,
    types: Array<ITypes>,
}

export interface MiniPokemonCardIconProps{
    pokemonURL: string;
}

export interface MiniPokemonCardInfosProps{
    pokemonName: string,
    nationalDex: number,
}

const fromType = {
    normal: 'from-pokemonTypes-normal',
    fire: 'from-pokemonTypes-fire',
    water: 'from-pokemonTypes-water',
    electric: 'from-pokemonTypes-electric',
    grass: 'from-pokemonTypes-grass',
    ice: 'from-pokemonTypes-ice',
    fighting: 'from-pokemonTypes-fighting',
    poison: 'from-pokemonTypes-poison',
    ground: 'from-pokemonTypes-ground',
    flying: 'from-pokemonTypes-flying',
    psychic: 'from-pokemonTypes-psychic',
    bug: 'from-pokemonTypes-bug',
    rock: 'from-pokemonTypes-rock', 
    ghost: 'from-pokemonTypes-ghost',
    dragon: 'from-pokemonTypes-dragon',
    dark: 'from-pokemonTypes-dark',
    steel: 'from-pokemonTypes-steel',
    fairy: 'from-pokemonTypes-fairy',
}

const toType = {
    normal: 'to-pokemonTypes-normal',
    fire: 'to-pokemonTypes-fire',
    water: 'to-pokemonTypes-water',
    electric: 'to-pokemonTypes-electric',
    grass: 'to-pokemonTypes-grass',
    ice: 'to-pokemonTypes-ice',
    fighting: 'to-pokemonTypes-fighting',
    poison: 'to-pokemonTypes-poison',
    ground: 'to-pokemonTypes-ground',
    flying: 'to-pokemonTypes-flying',
    psychic: 'to-pokemonTypes-psychic',
    bug: 'to-pokemonTypes-bug',
    rock: 'to-pokemonTypes-rock', 
    ghost: 'to-pokemonTypes-ghost',
    dragon: 'to-pokemonTypes-dragon',
    dark: 'to-pokemonTypes-dark',
    steel: 'to-pokemonTypes-steel',
    fairy: 'to-pokemonTypes-fairy',
}

const MiniPokemonCardRoot = (props: MiniPokemonCardRootProps) => {
    const primary = props.types[0].type.name
    const secondary = props.types[1] ? props.types[1].type.name : props.types[0].type.name

    return (
            <div className={clsx(`flex flex-row h-[120px] rounded px-8 py-7 items-center justify-start gap-8 bg-gradient-to-r hover:from-pokemonTypes-${primary} hover:to-slowpoke-pink-800`, fromType[primary], toType[secondary])} {...props}>
                {props.children}
            </div>
    )
}

const MiniPokemonCardIcon = (props: MiniPokemonCardIconProps) => {
    return (
        <>
            {
                props.pokemonURL ? 
                <img className=' text-slowpoke-black-900 h-24 w-24' src={props.pokemonURL} alt='pokemon sprite'>
                </img> 
                :
                <Question size={64} />
            }
        </>
    )
}

const MiniPokemonCardInfos = (props: MiniPokemonCardInfosProps) => {
    return (
            <div className='flex flex-col w-full h-full capitalize'>
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