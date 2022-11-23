import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import api from '../services/api';

interface ISpecies {
    id: number,
    name: string,
    order: number,
    gender_rate: number,
    capture_rate: number,
    base_happiness: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    hatch_counter: number
    has_gender_differences: boolean
    forms_switchable: boolean
    growth_rate: IGrowthRate
    pokedex_numbers: IPokedexNumbers[]
    egg_groups: IEggGroups[]
    color: IColor
    shape: IShape
    evolves_from_species: IEvolves
    evolution_chain: IEvolution
    habitat: IHabitat
    generation: IGeneration
    names: IName[]
    pal_park_encounters: IPalPark
    flavor_text_entries: IFlavorText[]
    form_descriptions: IDescription[]
    genera: IGenus[]
    varieties: IVarieties[]
  }

  interface IGrowthRate {
    name: string,
    url: string,
  }

  interface IPokedexNumbers {
    entry_number: number,
    pokedex: {
        name: string,
        url: string,
    }
  }

  interface IEggGroups {
    name: string,
    url: string,
  }

  interface IColor {
    name: string,
    url: string,
  }

  interface IShape {
    name: string,
    url: string,
  }

  interface IEvolves {
    name: string,
    url: string,
  }

  interface IEvolution {
    url: string,
  }

  interface IHabitat {
    name: string,
    url: string,
  }

  interface IGeneration {
    name: string,
    url: string,
  }

  interface IName {
    name: string,
    language: {
        name: string,
        url: string,
    }
  }

  interface IPalPark {
    base_score: number,
    rate: number,
    area: {
        name: string,
        url: string,
    }
  }

  interface IFlavorText {
    flavor_text: string,
    language: {
        name: string,
        url: string,
    },
    vesion: {
        name: string,
        url: string,
    }
  }

  interface IDescription {
    description: string,
    language: {
        name: string,
        url: string,
    }
  }

  interface IGenus {
    genus: string,
    language: {
        name: string,
        url: string,
    }
  }

  interface IVarieties {
    is_default: boolean,
    pokemon: {
        name: string,
        url: string,
    }
  }

  class SpeciesStore {
    @observable loadingSpecies: boolean = true
    @observable species: ISpecies[] = []
  
    constructor() {
        makeAutoObservable(this);
      }
  
    @action 
    fetchSpecies = async (name) => {
      try {
        this.loadingSpecies = true
        const response = await api.get(`v2/pokemon-species/${name}`)
        runInAction(() => {
            this.species = response.data
            this.loadingSpecies = false
        })
      } catch (error) {
        console.log("🚀 ~ file: pokemonStore.ts ~ line 349 ~ PokemonStore ~ fetchFlavor= ~ error", error)
      }
    }
  }
  
  export default SpeciesStore
  