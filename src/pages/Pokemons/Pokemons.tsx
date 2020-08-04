import React, { useEffect } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import { observer } from 'mobx-react'
import { autorun } from 'mobx'
import { stringifyRoute } from 'common/helpers'
import { Loader } from 'common/components'
import { ROUTES } from 'common/enums'
import { PokemonList } from './components/PokemonList/PokemonList'
import { FooterBar } from './components/FooterBar/FooterBar'
import { FilterBar } from './components/FilterBar/FilterBar'
import { usePaginationStore } from './stores/usePaginationStore'
import { usePokemonsStore } from './stores/usePokemonsStore'

const PokemonsPage: React.FC<RouteChildrenProps> = observer(({ location, history }) => {
  const pagination = usePaginationStore(location.search)

  const { store, filterPokemonsByName, filterPokemonsByType } = usePokemonsStore({
    pageLimit: pagination.pageLimit,
    pageNumber: pagination.pageNumber
  })

  useEffect(
    () =>
      autorun(() => {
        history.push(
          stringifyRoute(
            ROUTES.pokemons,
            {},
            { pageNumber: pagination.pageNumber, pageLimit: pagination.pageLimit }
          )
        )
      }),
    []
  )

  return (
    <>
      <FilterBar filterByName={filterPokemonsByName} filterByType={filterPokemonsByType} />
      {store.loading ? <Loader /> : <PokemonList pokemons={store.pokemons} />}
      {store.error && <p>Something went wrong... Please reload the page</p>}
      {store.pokemons.length > 0 && !store.loading && (
        <FooterBar
          onPageLimitChange={pagination.changePageLimit}
          onPaginationChange={pagination.changePageNumber}
          currentPage={Number(pagination.pageNumber)}
          totalPages={950}
          pageLimit={pagination.pageLimit}
        />
      )}
    </>
  )
})

export default PokemonsPage
