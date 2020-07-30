import React from 'react'
import { Switch, Route } from 'react-router'

import { routes } from 'common/enums'

export const App = () => {
  return (
    <Switch>
      <Route path={routes.pokemons} component={() => <h1>12243</h1>} exact />
    </Switch>
  )
}
