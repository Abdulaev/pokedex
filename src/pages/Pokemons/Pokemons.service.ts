import { getOffset } from 'common/helpers'
import Api from 'core/api'
import { Pokemon, PokemonApiTypes } from '@types'
import { REQUEST_METHODS } from 'common/enums'

const pokemonsListUrl = 'pokemon'

export class PokemonsService {
  static getPokemons(params: PokemonApiTypes.RequestParams) {
    return Api.get<PokemonApiTypes.LoadPokemonsResult, {}>(pokemonsListUrl, {
      limit: params.pageLimit,
      offset: getOffset(params.pageNumber, params.pageLimit)
    }).then(pokemons => {
      return Promise.all(
        pokemons.results.map(pokemon => Api.request<Pokemon, {}>(pokemon.url, REQUEST_METHODS.get))
      ).then(res => ({
        entities: res,
        count: pokemons.count
      }))
    })
  }
}
