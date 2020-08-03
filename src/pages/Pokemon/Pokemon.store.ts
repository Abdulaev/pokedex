import { Ability, Pokemon } from '@types'
import Api from 'core/api'

const ApiBase = new Api(process.env.REACT_APP_URL)

const pokemontUrl = 'pokemon/'

interface PokemonStoreType {
  pokemon: null | Pokemon
  abilities: null | Ability[]
  loading: boolean
  error: boolean
  loadPokemon: (id: string) => void
}

export const createPokemonStore = (): PokemonStoreType => ({
  pokemon: null,
  abilities: null,
  loading: false,
  error: false,
  loadPokemon(id: string) {
    this.loading = true
    ApiBase.get<Pokemon, {}>(pokemontUrl + id)
      .then(pokemon => {
        this.pokemon = pokemon
        return Promise.all(pokemon.abilities.map(i => Api.get<Ability, {}>(i.ability.url))).then(
          abilities => {
            this.abilities = abilities
          }
        )
      })
      .catch(() => {
        this.pokemon = null
        this.error = true
      })
      .finally(() => {
        this.loading = false
      })
  }
})

export type TPokemonStore = ReturnType<typeof createPokemonStore>
