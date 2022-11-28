import { clsx } from 'clsx'
import { Text } from '@components/Text/Text';

export interface TypeBoxProps {
    className?: string;
    type: string
}

const bgType = {
    normal: 'bg-pokemonTypes-normal',
    fire: 'bg-pokemonTypes-fire',
    water: 'bg-pokemonTypes-water',
    electric: 'bg-pokemonTypes-electric',
    grass: 'bg-pokemonTypes-grass',
    ice: 'bg-pokemonTypes-ice',
    fighting: 'bg-pokemonTypes-fighting',
    poison: 'bg-pokemonTypes-poison',
    ground: 'bg-pokemonTypes-ground',
    flying: 'bg-pokemonTypes-flying',
    psychic: 'bg-pokemonTypes-psychic',
    bug: 'bg-pokemonTypes-bug',
    rock: 'bg-pokemonTypes-rock', 
    ghost: 'bg-pokemonTypes-ghost',
    dragon: 'bg-pokemonTypes-dragon',
    dark: 'bg-pokemonTypes-dark',
    steel: 'bg-pokemonTypes-steel',
    fairy: 'bg-pokemonTypes-fairy',
}

export function TypeBox({ className, ...props }: TypeBoxProps) {
    const color = props.type

    return (
        <div className={clsx(`w-20 h-8 flex justify-center items-center rounded`, className, bgType[color])}>
            <Text size='sm' className='capitalize'>{props.type}</Text>
        </div>
    )
}