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

function PokedexPage () {
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [notFound, setNotFound] = useState(false)
  const [filterTerm, setFilterTerm] = useState('')

  const {
    pokemonStore: {fetchPokemons, fetchedPokemons, loadingFetchPokemons, totalPages, searchPokemon}
  } = useStore()

  useEffect(() => {
    fetchPokemons(page)
  },[page])

  useEffect(() => {
    if (!loadingFetchPokemons){
      setPokemons(fetchedPokemons)
    }
  },[fetchedPokemons])

  useEffect(() => {
    setNotFound(false)
    if (pokemons.length === 0) {
      setNotFound(true)
    }
  },[pokemons])

  const onchangeHandler = (event) => {
    setFilterTerm(event.target.value)
    if (event.target.value.length === 0) {
      fetchPokemons(page)
    }
  }

  useEffect(() => {
    const setItem = filterTerm ? filteredData(filterTerm) : pokemons
    setPokemons(setItem)
  }, [filterTerm])

  const filteredData = (filterTerm) => (
    fetchedPokemons.filter((item) =>
        item.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
        item.abilities[0].ability.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
        item.types[0].type.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
        item.moves[0].move.name.toLowerCase().includes(filterTerm.toLowerCase())
    )
  )

  return (
    <PageLayout PageIcon={<DeviceMobile size={32}/>} PageName={'Pokedex'}>
        <SearchBar 
          type='search'
          placeholder="Pesquisar pokemon / habilidade / tipagem / golpe" 
          value={filterTerm} 
          onChange={onchangeHandler}
        />

        <>
          <Pagination setPage={setPage} page={page} totalPages={totalPages} className='mt-8'/>
          {
            !loadingFetchPokemons && !notFound &&
            <div className="grid mt-8 gap-8 grid-cols-3">
              {
                pokemons.map(pokemon => 
                  <MiniPokemonCard.Root key={pokemon.id}>
                    <MiniPokemonCard.Icon pokemonURL={pokemon.sprites.front_default}/>
                    <MiniPokemonCard.Infos pokemonName={pokemon.name} nationalDex={pokemon.id}/>
                  </MiniPokemonCard.Root>
                )
              }
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

export default observer(PokedexPage)