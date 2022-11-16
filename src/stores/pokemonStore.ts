import { observable, action, makeAutoObservable, runInAction } from 'mobx';

interface IAbilities {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string,
    url: string,
  }
}

interface IForms {
  name: string,
  url: string,
}

interface IGame_indices {
  game_index: number,
  version: {
    name: string,
    url: string,
  }
}

interface IHeld_items {
  item: {
    name: string,
    url: string,
  },
  version_details: {
    rarity: number,
    version: {
      name: string,
      url: string,
    }
  }
}

interface IMoves {
  move: {
    name: string,
    url: string,
  },
  version_group_details: {
    level_learned_at: number,
    version_group: {
      name: string,
      url: string,
    },
    move_learn_method: {
      name: string,
      url: string,
    }
  }
}

interface ISpecies {
  name: string,
  url: string,
}

interface ISprites {
  back_default: string
  back_female: string|null
  back_shiny: string
  back_shiny_female: string|null
  front_default: string
  front_female: string|null
  front_shiny: string
  front_shiny_female: string|null
  other: {
    dream_world: {
      front_default: string,
      front_female: string|null
    },
    home: {
      front_default: string,
      front_female: string|null,
      front_shiny: string,
      front_shiny_female: string|null
    },
    official_artwork: {
      front_default: string,
    }
  },
  versions: {
    generation_i: {
      red_blue: {
        back_default: string|null,
        back_gray: string|null,
        front_default: string|null,
        front_gray: string|null,
      },
      yellow: {
        back_default: string|null,
        back_gray: string|null,
        front_default: string|null,
        front_gray: string|null,
      }
    },
    generation_ii: {
      crystal: {
        back_default: string|null,
        back_shiny: string|null,
        front_default: string|null,
        front_shiny: string|null,
      },
      gold: {
        back_default: string|null,
        back_shiny: string|null,
        front_default: string|null,
        front_shiny: string|null,
      },
      silver: {
        back_default: string|null,
        back_shiny: string|null,
        front_default: string|null,
        front_shiny: string|null,
      }
    },
    generation_iii: {
      emerald: {
        front_default: string|null,
        front_shiny: string|null
      },
      firered_leafgreen: {
        back_default: string|null,
        back_shiny: string|null,
        front_default: string|null,
        front_shiny: string|null,
      },
      ruby_sapphire: {
        back_default: string|null,
        back_shiny: string|null,
        front_default: string|null,
        front_shiny: string|null,
      }
    },
    generation_iv: {
      diamond_pearl: {
        back_default: string|null,
        back_female: string|null,
        back_shiny: string|null,
        back_shiny_female: string|null,
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
      },
      heartgold_soulsilver: {
        back_default: string|null,
        back_female: string|null,
        back_shiny: string|null,
        back_shiny_female: string|null,
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
      },
      platinum: {
        back_default: string|null,
        back_female: string|null,
        back_shiny: string|null,
        back_shiny_female: string|null,
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
      }
    },
    generation_v: {
      black_white: {
        animated: {
          back_default: string|null,
          back_female: string|null,
          back_shiny: string|null,
          back_shiny_female: string|null,
          front_default: string|null,
          front_female: string|null,
          front_shiny: string|null,
          front_shiny_female: string|null,
        },
        back_default: string|null,
        back_female: string|null,
        back_shiny: string|null,
        back_shiny_female: string|null,
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
      }
    },
    generation_vi: {
      omegaruby_alphasapphire: {
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
      },
      x_y: {
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
      }
    },
    generation_vii: {
      icons: {
        front_default: string|null,
        front_female: string|null,
      },
      ultra_sun_ultra_moon: {
        front_default: string|null,
        front_female: string|null,
        front_shiny: string|null,
        front_shiny_female: string|null,
      }
    },
    generation_viii: {
      icons: {
        front_default: string|null,
        front_female: string|null,
      },
    }
  }
}

interface IStats {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string,
  }
}

interface ITypes {
  slot: number,
  type: {
    name: string,
    url: string,
  }
}

interface IPast_types {
  generation: {
    name: string,
    url: string,
  },
  types: {
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }
}

export interface IPokemon {
  url: string,
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
  location_area_encounters: string,
  abilities: IAbilities,
  forms: IForms,
  game_indices: IGame_indices,
  held_items: IHeld_items,
  moves: IMoves,
  past_types: IPast_types,
  sprites: ISprites,
  species: ISpecies,
  stats: IStats,
  types: ITypes,
}

class PokemonStore {
  @observable fetchedPokemons: IPokemon[] = [];
  @observable loadingFetchPokemons: boolean = true;
  @observable notFound: boolean = false;
  @observable totalPages: number = 1; 

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
  getPokemons = async (limit = 30, offset = 0) => {
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

  @action 
  fetchPokemons = async (page) => {
    try {
      this.loadingFetchPokemons = true
      this.notFound = false
      const data = await this.getPokemons(30, 30 * page);
      const promises = data.results.map(async (pokemon:IPokemon) => {
        return await this.getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      runInAction(() => {
        this.fetchedPokemons = results
        this.loadingFetchPokemons = false
        this.totalPages = Math.ceil(data.count / 30)
      })
    } catch (error) {
      console.log("🚀 ~ file: pokemonStore.ts ~ line 340 ~ PokemonStore ~ fetchPokemons= ~ error", error)
    }
  }
}

export default PokemonStore
