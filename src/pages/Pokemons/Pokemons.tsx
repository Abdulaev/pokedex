import React, { useEffect } from 'react'
import { parse } from 'query-string'
import { RouteChildrenProps } from 'react-router-dom'
import { observer, useLocalStore } from 'mobx-react'
import { reaction } from 'mobx'
import { stringifyRoute } from 'common/helpers'
import { Loader } from 'common/components'
import { ROUTES } from 'common/enums'
import { PokemonList } from './components/PokemonList/PokemonList'
import { FooterBar } from './components/FooterBar/FooterBar'
import { FilterBar } from './components/FilterBar/FilterBar'
import { createPokemonsStore } from './Pokemons.store'

const PokemonsPage: React.FC<RouteChildrenProps> = observer(({ location, history }) => {
  const parsedQueryParams = parse(location.search)

  const store = useLocalStore(createPokemonsStore, {
    pageNumber: parsedQueryParams?.pageNumber ? Number(parsedQueryParams.pageNumber) : 1,
    pageLimit: parsedQueryParams?.pageLimit ? Number(parsedQueryParams.pageLimit) : 20
  })

  useEffect(
    () =>
      reaction(
        () => ({
          pageNumber: store.pagination.pageNumber,
          pageLimit: store.pagination.pageLimit
        }),
        () => {
          history.push(
            stringifyRoute(
              ROUTES.pokemons,
              {},
              { pageNumber: store.pagination.pageNumber, pageLimit: store.pagination.pageLimit }
            )
          )
          store.loadPokemons()
        }
      ),
    []
  )

  useEffect(() => {
    if (!location.search) store.changePageLimit(20)
  }, [location.search])

  useEffect(() => {
    store.loadPokemons()

    return () => {
      store.abort.abort()
    }
  }, [])

  return (
    <>
      <FilterBar
        filterByName={store.filterPokemonsByName}
        filterByType={store.filterPokemonsByType}
      />
      {store.loading ? <Loader /> : <PokemonList pokemons={store.pokemons} />}
      {store.error && <p>Something went wrong... Please reload the page</p>}
      {store.pokemons.length > 0 && !store.loading && (
        <FooterBar
          onPageLimitChange={store.changePageLimit}
          onPaginationChange={store.changePageNumber}
          currentPage={Number(store.pagination.pageNumber)}
          totalPages={store.pokemonsCount}
          pageLimit={store.pagination.pageLimit}
        />
      )}
    </>
  )
})

export default PokemonsPage
