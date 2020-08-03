import React, { useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { RouteChildrenProps } from 'react-router-dom'
import { Loader } from 'common/components/atoms'
import { createPokemonStore } from './Pokemon.store'
import { PokemonDetails } from './components/PokemonDetails/PokemonDetails'

interface Params {
  id: string
}

const PokemonPage: React.FC<RouteChildrenProps<Params>> = observer(({ match }) => {
  const store = useLocalStore(createPokemonStore)

  useEffect(() => {
    store.loadPokemon(match.params.id)
  }, [])

  return (
    <>
      {store.error && <p>Something went wrong... Please reload the page</p>}
      {store.loading ? (
        <Loader />
      ) : (
        <PokemonDetails pokemon={store.pokemon} abilities={store.abilities} />
      )}
    </>
  )
})

export default PokemonPage
