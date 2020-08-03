import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import EmptyImg from 'assets/images/empty.png'
import { Card, Image, Tag } from 'common/components'
import { stringifyRoute } from 'common/helpers'
import { ROUTES, TYPE_COLORS } from 'common/enums'
import { Pokemon } from '@types'
import { CardWrapper, Container, TagList } from './PokemonList.style'

interface PokemonListProps {
  pokemons: Pokemon[]
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  const history = useHistory()

  const handleRedirect = useCallback((id: number) => {
    history.push(stringifyRoute(ROUTES.pokemon, { id: String(id) }, {}))
  }, [])

  return (
    <Container>
      {pokemons.map(pokemon => (
        <CardWrapper key={pokemon.id}>
          <Card
            header={<Image src={pokemon.sprites.front_default ?? EmptyImg} />}
            onClick={() => handleRedirect(pokemon.id)}
          >
            <h1>{pokemon.name}</h1>
            <TagList>
              {pokemon.types.map(i => (
                <Tag key={i.slot} color={TYPE_COLORS[i.type.name]}>
                  {i.type.name}
                </Tag>
              ))}
            </TagList>
          </Card>
        </CardWrapper>
      ))}
    </Container>
  )
}
