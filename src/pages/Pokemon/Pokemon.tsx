import React, { useEffect } from 'react'
import { observer, useLocalStore } from 'mobx-react'
import { RouteChildrenProps } from 'react-router-dom'
import { Loader } from 'common/components/atoms'
import { createPokemonsStore } from './Pokemon.store'

interface Params {
  id: string
}

const PokemonPage: React.FC<RouteChildrenProps<Params>> = observer(({ match }) => {
  const store = useLocalStore(createPokemonsStore)

  useEffect(() => {
    store.loadPokemon(match.params.id)
  }, [])

  return store.loading ? <Loader /> : <p>123</p>
})

export default PokemonPage
