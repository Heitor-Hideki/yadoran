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
import { ISpecies } from "@stores/speciesStore";
import { Heading } from "@components/Heading/Heading";
import { PokemonCard } from "@components/PokemonCard";
import api from '../../src/services/api';
import clsx from "clsx";

function PokedexPage (props) {
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [notFound, setNotFound] = useState(false)
  const [filterTerm, setFilterTerm] = useState('')
  const [cardSpecies, setCardSpecies] = useState<ISpecies[]>([])
  const [cardPokemon, setCardPokemon] = useState<IPokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [cardX, setCardX] = useState('')
  const [cardY, setCardY] = useState('')
  const pokeNames = props.fetched
  
  const {
    pokemonStore: { fetchPokemons, fetchedPokemons, loadingFetchPokemons, totalPages, searchBarAction },
    speciesStore: { species, fetchSpecies, loadingSpecies }
  } = useStore()

  useEffect(() => {
    if (!filterTerm) {
      fetchPokemons(pokeNames, page)
    } 
    if (filterTerm && filterTerm.length !== 0) {
      const setItem = filterTerm ? filteredData(filterTerm) : pokemons
      searchBarAction(setItem, page)
    }
  },[page])

  useEffect(() => {
    setPokemons(fetchedPokemons)
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
      fetchPokemons(pokeNames, page)
    }
  }

  const filterHandler = () => {
    const setItem = filterTerm ? filteredData(filterTerm) : pokemons
    setPage(0)
    searchBarAction(setItem, page)
  }

  useEffect(() => {
    if (!!filterTerm) {
      filterHandler()
    }
  }, [filterTerm])


  const filteredData = (filterTerm) => (
    pokeNames.results.filter((item) =>
        item.name.toLowerCase().includes(filterTerm.toLowerCase())
    )
  )

  const defineSpecies = async (id) => {
    setLoading(true)
    await fetchSpecies(id)
    setLoading(false)
  }

  const onMouseOverHandler = async (id) => {
    await fetchSpecies(id)
    setCardPokemon(pokemons.filter((item) => item.id === id))
  }

  const onMouseLeaveHandler = () => {
    setCardSpecies([])
    setCardPokemon([])
    setCardX("top-[" + 0 + "px]")
    setCardY("left-[" + 0 + "px]")
  }

  const locationVerifier = (event) => {
    const x = event.clientX
    const y = event.clientY
    setCardX("top-[" + x + "px]")
    setCardY("left-[" + y+ "px]")
    console.log(cardX)
  }

  useEffect (() => {
    setCardSpecies([species])
  }, [species])

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
            !notFound && !loadingFetchPokemons &&
            <div className="grid mt-8 gap-8 grid-cols-3 mb-8 auto-cols-max">
              {
                pokemons.map(pokemon => 
                  <MiniPokemonCard.Root key={pokemon.id} types={pokemon.types} onMouseEnter={() => {locationVerifier(event), onMouseOverHandler(pokemon.id)}} onMouseLeave={() => onMouseLeaveHandler()}>
                    <MiniPokemonCard.Icon pokemonURL={pokemon.sprites.front_default ? pokemon.sprites.front_default : pokemon.sprites.other["official-artwork"]["front_default"]}/>
                    <MiniPokemonCard.Infos pokemonName={pokemon.name} nationalDex={pokemon.id}/>
                  </MiniPokemonCard.Root>
                )
              }
              {
                cardSpecies[0] && !loadingSpecies && cardPokemon[0].name && cardSpecies[0].flavor_text_entries &&
                <PokemonCard.Root className={clsx(`fixed`, cardX, cardY)}>
                  <PokemonCard.Header pokemonName={cardPokemon[0].name} types={cardPokemon[0].types}/>
                  <PokemonCard.Image pokemonURL={cardPokemon[0].sprites.other["official-artwork"]["front_default"] !== null ? cardPokemon[0].sprites.other["official-artwork"]["front_default"] :  cardPokemon[0].sprites.front_default}/>
                  <PokemonCard.Infos nationalDex={cardPokemon[0].id} flavor_text={cardSpecies[0].flavor_text_entries[0].flavor_text}/> 
                </PokemonCard.Root>
              }
            </div>
          }
          {
            loadingFetchPokemons &&
            <Loading className="flex justify-center items-center mt-8"/>
          }
        </>
        {
          notFound && !loadingFetchPokemons &&
          <div className="flex flex-row justify-center items-center mt-8 gap-8">
            <Bug size={32} /> <Heading size="md">Pokemon não encontrado</Heading>
          </div>
        }
        <Pagination setPage={setPage} page={page} totalPages={totalPages} className='mt-8'/>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const res = await api.get('v2/pokemon?limit=1154&offset=0');
  const data = res.data;

  const second = 1
  const minute = 60*second
  const hour = 60*minute
  const day = 24*hour
  const year = 365*day

  return {
    props: {fetched: data},
    revalidate: 30*day,
  }
}

export default observer(PokedexPage)