import React, { useEffect } from 'react'
import { parse } from 'query-string'
import { RouteChildrenProps } from 'react-router-dom'
import { observer, useLocalStore } from 'mobx-react'
import Pagination from 'rc-pagination'

import { locale } from 'core/constants/paginationLocale'
import { stringifyRoute } from 'common/helpers'
import { Loader } from 'common/components'
import { ROUTES } from 'common/enums'
import { PokemonList } from './components/PokemonList/PokemonList'
import { FilterBar } from './components/FilterBar/FilterBar'
import { createPokemonStore } from './Pokemons.store'

const PokemonsPage: React.FC<RouteChildrenProps> = observer(({ location, history }) => {
  const parsedQueryParams = parse(location.search)

  const store = useLocalStore(createPokemonStore, {
    pageNumber: parsedQueryParams?.pageNumber ? Number(parsedQueryParams.pageNumber) : 1,
    pageLimit: parsedQueryParams?.pageLimit ? Number(parsedQueryParams.pageLimit) : 20
  })

  useEffect(() => {
    store.loadPokemons()

    return () => {
      store.abort.abort()
    }
  }, [])

  const handlePaginationChange = (newPage: number) => {
    store.changePageNumber(newPage)
    history.push(
      stringifyRoute(
        ROUTES.pokemons,
        {},
        { pageNumber: store.pagination.pageNumber, pageLimit: store.pagination.pageLimit }
      )
    )
  }

  return (
    <>
      <FilterBar
        filterByName={store.filterPokemonsByName}
        filterByType={store.filterPokemonsByType}
      />
      {store.loading ? <Loader /> : <PokemonList pokemons={store.pokemons} />}
      {(!store.loading || store.pokemonsCount === 0) && (
        <Pagination
          locale={locale}
          total={store.pokemonsCount}
          pageSize={store.pagination.pageLimit}
          onChange={handlePaginationChange}
          current={Number(store.pagination.pageNumber)}
        />
      )}
    </>
  )
})

export default PokemonsPage
