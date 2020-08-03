import React, { useEffect } from 'react'
import { useLocalStore, observer } from 'mobx-react'
import Pagination from 'rc-pagination'

import { locale } from 'core/constants/paginationLocale'
import { Loader } from 'common/components'
import { PokemonList } from './components/PokemonList/PokemonList'
import { FilterBar } from './components/FilterBar/FilterBar'
import { createPokemonStore } from './Pokemons.store'

const PokemonsPage: React.FC = observer(() => {
  const store = useLocalStore(createPokemonStore)

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
      {!store.loading && (
        <Pagination
          locale={locale}
          total={store.pokemonsCount}
          pageSize={store.pagination.pageLimit}
          onChange={store.changePageNumber}
          current={store.pagination.pageNumber}
        />
      )}
    </>
  )
})

export default PokemonsPage
