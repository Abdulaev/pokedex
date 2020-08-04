import { getOffset } from 'common/helpers'
import Api from 'core/api'
import { Pokemon, PokemonApiTypes } from '@types'

const ApiBase = new Api(process.env.REACT_APP_URL)
const pokemonsListUrl = 'pokemon'

export class PokemonService {
  static getPokemons(params: PokemonApiTypes.RequestParams) {
    return ApiBase.get<PokemonApiTypes.LoadPokemonsResult, {}>(pokemonsListUrl, {
      limit: params.pageLimit,
      offset: getOffset(params.pageNumber, params.pageLimit)
    }).then(pokemons => {
      return Promise.all(pokemons.results.map(pokemon => Api.get<Pokemon, {}>(pokemon.url))).then(
        res => ({
          entities: res,
          count: pokemons.count
        })
      )
    })
  }
}
