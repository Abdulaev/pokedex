import React from 'react'
import { useHistory } from 'react-router-dom'
import { stringifyRoute } from 'common/helpers'
import { ROUTES } from 'common/enums'
import { Container, Title, Content } from './Header.style'

export const Header: React.FC = () => {
  const history = useHistory()

  const handleRedirect = () => {
    history.push(stringifyRoute(ROUTES.pokemons, {}, {}))
  }

  return (
    <Container>
      <Content>
        <Title onClick={handleRedirect}>Pokedex</Title>
      </Content>
    </Container>
  )
}
