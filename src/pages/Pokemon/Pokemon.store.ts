import { Pokemon } from '@types'
import Api from 'core/api'

const ApiBase = new Api(process.env.REACT_APP_URL)

const pokemontUrl = 'pokemon/'

export const createPokemonsStore = () => ({
  pokemon: {} as Pokemon,
  loading: false,
  error: false,
  loadPokemon(id: string) {
    this.loading = true
    ApiBase.get<Pokemon, {}>(pokemontUrl + id)
      .then(pokemon => {
        this.pokemon = pokemon
      })
      .catch(() => {
        this.pokemon = {} as Pokemon
        this.error = true
      })
      .finally(() => {
        this.loading = false
      })
  }
})

export type TPokemonStore = ReturnType<typeof createPokemonsStore>
