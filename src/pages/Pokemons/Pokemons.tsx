import React, { useEffect } from 'react'
import { useLocalStore, observer } from 'mobx-react'

import { Loader } from 'common/components'
import { PokemonList } from './components/PokemonList/PokemonList'
import { createPokemonStore } from './Pokemons.store'

const PokemonsPage: React.FC = observer(() => {
  const store = useLocalStore(createPokemonStore)

  useEffect(() => {
    store.loadPokemons()

    return () => {
      store.abort.abort()
    }
  }, [])

  return <>{store.loading ? <Loader /> : <PokemonList pokemons={store.pokemons} />}</>
})

export default PokemonsPage
