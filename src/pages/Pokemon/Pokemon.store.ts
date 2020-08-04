import { Ability, Pokemon } from '@types'
import Api from 'core/api'
import { REQUEST_METHODS } from 'common/enums'

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
    Api.get<Pokemon, {}>(pokemontUrl + id)
      .then(pokemon => {
        this.pokemon = pokemon
        return Promise.all(
          pokemon.abilities.map(i => Api.request<Ability, {}>(i.ability.url, REQUEST_METHODS.get))
        ).then(abilities => {
          this.abilities = abilities
        })
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
