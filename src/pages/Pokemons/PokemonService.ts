import { getOffset } from 'common/helpers'
import Api from 'core/api'
import { Pokemon, PokemonApiTypes } from '@types'

const ApiBase = new Api(process.env.REACT_APP_URL)
const pokemonsListUrl = 'pokemon'

export class PokemonService {
  static getPokemons(params: PokemonApiTypes.RequestParams, body: PokemonApiTypes.RequestBody) {
    return ApiBase.get<PokemonApiTypes.LoadPokemonsResult, typeof body>(
      pokemonsListUrl,
      {
        limit: params.pageLimit,
        offset: getOffset(params.pageNumber, params.pageLimit)
      },
      body
    ).then(pokemons => {
      return Promise.all(pokemons.results.map(pokemon => Api.get<Pokemon, {}>(pokemon.url))).then(
        res => ({
          entities: res,
          count: pokemons.count
        })
      )
    })
  }
}
