import Api from 'core/api'
import { Pokemon, TRemoteSource } from '@types'

const ApiBase = new Api(process.env.REACT_APP_URL)

interface LoadPokemonsResult {
  previous: null | string
  next: null | string
  count: number
  results: TRemoteSource[]
}

export const createPokemonStore = () => ({
  pokemons: [] as Pokemon[],
  loading: false,
  error: false,
  loadPokemons() {
    this.loading = true
    ApiBase.get<LoadPokemonsResult>('pokemon')
      .then(pokemons => {
        this.error = false
        return Promise.all(pokemons.results.map(pokemon => Api.get<Pokemon>(pokemon.url))).then(
          res => {
            this.pokemons = res
          }
        )
      })
      .catch(() => {
        this.pokemons = []
        this.error = true
      })
      .finally(() => {
        this.loading = false
      })
  }
})

export type TPokemonStore = ReturnType<typeof createPokemonStore>
