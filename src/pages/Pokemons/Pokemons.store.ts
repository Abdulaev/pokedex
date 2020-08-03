import Api from 'core/api'
import { Pokemon, TRemoteSource } from '@types'
import { getOffset } from 'common/helpers'

const pokemonsListUrl = 'pokemon'

interface RequestBody {
  signal: AbortSignal
}

const ApiBase = new Api(process.env.REACT_APP_URL)

interface LoadPokemonsResult {
  previous: null | string
  next: null | string
  count: number
  results: TRemoteSource[]
}

interface PokemonsStoreProps {
  pageLimit: number
  pageNumber: number
}

export const createPokemonsStore = (props: PokemonsStoreProps) => ({
  pokemonsCount: null,
  pagination: {
    pageNumber: props.pageNumber,
    pageLimit: props.pageLimit
  },
  pokemons: [] as Pokemon[],
  defaultPokemons: [] as Pokemon[],
  loading: false,
  error: false,
  abort: new AbortController(),
  changePageLimit(newLimit: number) {
    this.pagination.pageNumber = 1
    this.pagination.pageLimit = newLimit
  },
  changePageNumber(newPageNumber: number) {
    this.pagination.pageNumber = newPageNumber
  },
  filterPokemonsByName(query: string) {
    if (query.length === 0) {
      this.pokemons = this.defaultPokemons
    } else {
      this.pokemons = this.defaultPokemons.filter(
        ({ name }) => name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
    }
  },
  filterPokemonsByType(types: string[]) {
    if (types.length === 0) {
      this.pokemons = this.defaultPokemons
    } else {
      this.pokemons = this.defaultPokemons.filter(pokemon =>
        pokemon.types.some(i => types.indexOf(i.type.name) !== -1)
      )
    }
  },
  loadPokemons() {
    this.loading = true
    ApiBase.get<LoadPokemonsResult, RequestBody>(
      pokemonsListUrl,
      {
        limit: this.pagination.pageLimit,
        offset: getOffset(this.pagination.pageNumber, this.pagination.pageLimit)
      },
      { signal: this.abort.signal }
    )
      .then(pokemons => {
        this.pokemonsCount = pokemons.count
        return Promise.all(pokemons.results.map(pokemon => Api.get<Pokemon, {}>(pokemon.url))).then(
          res => {
            this.error = false
            this.defaultPokemons = res
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

export type TPokemonsStore = ReturnType<typeof createPokemonsStore>
