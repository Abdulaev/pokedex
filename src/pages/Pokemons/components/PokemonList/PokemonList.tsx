import React from 'react'
import { Card, Image, Tag } from 'common/components'
import { TYPE_COLORS } from 'common/enums'
import { Pokemon } from '@types'
import { Container, CardWrapper, TagList } from './PokemonList.style'

interface PokemonListProps {
  pokemons: Pokemon[]
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <Container>
      {pokemons.map(pokemon => (
        <CardWrapper key={pokemon.id}>
          <Card header={<Image src={pokemon.sprites.front_default} />}>
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
