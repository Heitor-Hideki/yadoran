import { Heading } from "@components/Heading/Heading";
import { MiniPokemonCard } from "@components/MiniPokemonCard/MiniPokemonCard";
import { PageLayout } from "@components/PageLayout/PageLayout";
import { TextInput } from "@components/TextInput/TextInput";
import { DeviceMobile, MagnifyingGlass } from "phosphor-react";

export default function SignUpPage () {
  return (
    <PageLayout PageIcon={<DeviceMobile size={'32px'}/>} PageName={'Pokedex'}>
        <TextInput.Root className="w-full mt-3">
            <TextInput.Icon>
                <MagnifyingGlass/>
            </TextInput.Icon>
            <TextInput.Input placeholder="Pesquisar pokemon"/>
        </TextInput.Root>
        <div className="h-full w-full mt-8">
          <MiniPokemonCard.Root>
            <MiniPokemonCard.Icon pokemonURL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png" />
            <MiniPokemonCard.Infos pokemonName="squirtle" nationalDex={7}/>
          </MiniPokemonCard.Root>
        </div>
    </PageLayout>
  )
}
