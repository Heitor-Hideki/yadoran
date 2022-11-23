import { MiniPokemonCard } from "@components/MiniPokemonCard/MiniPokemonCard";
import { PageLayout } from "@components/PageLayout/PageLayout";
import { Bug, DeviceMobile } from "phosphor-react";
import { useStore } from '@stores/index';
import { SearchBar } from "@components/SearchBar";
import { Pagination } from "@components/Pagination";
import { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import { toJS } from "mobx";
import { Loading } from "@components/Loading";
import { IPokemon } from "@stores/pokemonStore";
import { Heading } from "@components/Heading/Heading";
import { PokemonCard } from "@components/PokemonCard";
import api from '../../src/services/api';
import axios from "axios";

function PokedexPage (props) {
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [notFound, setNotFound] = useState(false)
  const [filterTerm, setFilterTerm] = useState('')
  const [showCard, setShowCard] = useState(false)

  const pokeStats =  props.fetched.map(item => JSON.parse(item))
  
  const {
    pokemonStore: {fetchPokemons, fetchedPokemons, loadingFetchPokemons, totalPages, searchPokemon},
    speciesStore: { species, fetchSpecies, loadingSpecies }
  } = useStore()

  useEffect(() => {
    fetchPokemons()
  },[page])

  useEffect(() => {
    setPokemons(fetchedPokemons)
  },[fetchedPokemons])

  // useEffect(() => {
  //   setNotFound(false)
  //   if (pokemons.length === 0) {
  //     setNotFound(true)
  //   }
  // },[pokemons])

  const onchangeHandler = (event) => {
    setFilterTerm(event.target.value)
    if (event.target.value.length === 0) {
      fetchPokemons()
    }
  }

  useEffect(() => {
    const setItem = filterTerm ? filteredData(filterTerm) : pokemons
    setPokemons(setItem)
  }, [filterTerm])

  const filteredData = (filterTerm) => (
    fetchedPokemons.filter((item) =>
        item.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
        item.abilities.some((abilities) => 
          abilities.ability.name.toLowerCase().includes(filterTerm.toLowerCase()) 
        ) ||
        item.types.some((types) => 
        types.type.name.toLowerCase().includes(filterTerm.toLowerCase()) 
        ) ||
          item.moves.some((moves) => 
          moves.move.name.toLowerCase().includes(filterTerm.toLowerCase()) 
        )
    )
  )

  // const onMouseOverHandler = (name) => {
  //   fetchSpecies(name)
  //   console.log(toJS(species[0].flavor_text_entries[0].flavor_text))
  // }

  useEffect(() => {
  }, [species])

  return (
    <PageLayout PageIcon={<DeviceMobile size={32}/>} PageName={'Pokedex'}>
        <SearchBar 
          type='search'
          placeholder="Pesquisar pokemon / habilidade / tipagem / golpe" 
          value={filterTerm} 
          onChange={onchangeHandler}
        />
      {/* onMouseOver={() => onMouseOverHandler(pokemon.name)} */}
        <>
          <Pagination setPage={setPage} page={page} totalPages={totalPages} className='mt-8'/>
          {
            !loadingFetchPokemons && !notFound &&
            <div className="grid mt-8 gap-8 grid-cols-3">
              {
                pokemons.map(pokemon => 
                  <MiniPokemonCard.Root key={pokemon.id} >
                    <MiniPokemonCard.Icon pokemonURL={pokemon.sprites.front_default}/>
                    <MiniPokemonCard.Infos pokemonName={pokemon.name} nationalDex={pokemon.id}/>
                  </MiniPokemonCard.Root>
                )
              }
              {/* {
                <PokemonCard.Root>
                  <PokemonCard.Header pokemonName="nasus" primaryType="gay" secondaryType='dog'/>
                  <PokemonCard.Image pokemonURL="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg"/>
                  <PokemonCard.Infos nationalDex={12} form='alola' flavor_text="species.flavor_text_entries[0].flavor_text"/> 
                </PokemonCard.Root>
              } */}
            </div>
          }
          {
            loadingFetchPokemons &&
            <Loading className="flex justify-center items-center mt-8"/>
          }
        </>
        {
          !loadingFetchPokemons && notFound &&
          <div className="flex flex-row justify-center items-center mt-8 gap-8">
            <Bug size={32} /> <Heading size="md">Pokemon não encontrado</Heading>
          </div>
        }
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const res = await api.get('v2/pokemon?limit=1154&offset=0');
  const data = res.data;

  const promises = data.results.map(async (pokemon:IPokemon) => {
    const param = pokemon.url.replace('https://pokeapi.co/api/', "")
    return await api.get(param);
  });

  const pokemons = await Promise.all(promises);
  const stringfy = pokemons.map(item => JSON.stringify(item.data))

  // const second = 1
  // const minute = 60*second
  // const hour = 60*minute
  // const day = 24*hour
  // const year = 365*day

  return {
    props: {fetched: stringfy},
    // revalidate: 30*days,
  }
}

export default observer(PokedexPage)