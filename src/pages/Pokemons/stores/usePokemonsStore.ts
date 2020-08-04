import { useAsObservableSource, useLocalStore } from 'mobx-react'
import { useEffect } from 'react'
import { reaction } from 'mobx'
import { Pokemon, PokemonApiTypes } from '@types'
import { PokemonService } from '../PokemonService'

export const createPokemonsStore = () => ({
  pokemonsCount: null,
  pokemons: [] as Pokemon[],
  initialPokemons: [] as Pokemon[],
  loading: true,
  error: false,
  changePokemons(pokemons: Pokemon[]) {
    this.pokemons = pokemons
  },
  loadPokemons(params: PokemonApiTypes.RequestParams) {
    this.loading = true
    PokemonService.getPokemons(params)
      .then(({ entities, count }) => {
        this.pokemonsCount = count
        this.pokemons = entities
        this.initialPokemons = entities
        this.error = false
      })
      .catch(() => {
        this.error = true
      })
      .finally(() => {
        this.loading = false
      })
  }
})

export const usePokemonsStore = (pagination: PokemonApiTypes.RequestParams) => {
  const observedPagination = useAsObservableSource(pagination)

  const store = useLocalStore(createPokemonsStore)

  useEffect(
    () =>
      reaction(
        () => ({
          pageNumber: observedPagination.pageNumber,
          pageLimit: observedPagination.pageLimit
        }),
        store.loadPokemons,
        { fireImmediately: true }
      ),
    []
  )

  const filterPokemonsByName = (query: string) => {
    if (query.length === 0) {
      store.changePokemons(store.initialPokemons)
    } else {
      const filteredPokemons = store.initialPokemons.filter(
        ({ name }) => name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
      store.changePokemons(filteredPokemons)
    }
  }

  const filterPokemonsByType = (types: string[]) => {
    if (types.length === 0) {
      store.changePokemons(store.initialPokemons)
    } else {
      const filteredPokemons = store.initialPokemons.filter(pokemon =>
        pokemon.types.some(i => types.indexOf(i.type.name) !== -1)
      )
      store.changePokemons(filteredPokemons)
    }
  }

  return {
    store,
    filterPokemonsByType,
    filterPokemonsByName
  }
}
