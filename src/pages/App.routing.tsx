import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTES } from 'common/enums'
import { MainLayout, Loader } from 'common/components'

const PokemonsPage = React.lazy(() => import('./Pokemons/Pokemons'))
const PokemonPage = React.lazy(() => import('./Pokemon/Pokemon'))

export const App = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route path={ROUTES.pokemons} component={PokemonsPage} exact />
          <Route path={ROUTES.pokemon} component={PokemonPage} />
          <Redirect from='*' to={ROUTES.pokemons} />
        </Switch>
      </React.Suspense>
    </MainLayout>
  )
}
