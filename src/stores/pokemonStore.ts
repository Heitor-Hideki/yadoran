import { observable, action, makeAutoObservable, runInAction } from 'mobx';

class PokemonStore {
  

  constructor() {
      makeAutoObservable(this);
    }

  @action 
  searchPokemon = async (pokemon: any) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
  
    } catch (error) {
        console.log("error: ", error)
    }
  }
  
  @action 
  getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
  
    } catch (error) {
        console.log("error: ", error)
    }
  }
  
  @action 
  getPokemonData = async (url:any) => {
    try {
        const response = await fetch(url)
        return await response.json()
  
    } catch (error) {
        console.log("error: ", error)
    }
}
}

export default PokemonStore
