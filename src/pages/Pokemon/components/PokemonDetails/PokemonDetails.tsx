import React from 'react'
import { Ability, Pokemon } from '@types'
import { Image, Tag } from 'common/components'
import { TYPE_COLORS } from 'common/enums'
import { EN_LANG } from 'core/constants/locale'
import {
  Container,
  Title,
  Description,
  HeaderContainer,
  Body,
  Group,
  Tags
} from './PokemonDetails.style'

interface PokemonDetailsProps {
  pokemon: Pokemon
  abilities: Ability[]
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, abilities }) => {
  return (
    pokemon && (
      <Container>
        <HeaderContainer>
          <Image src={pokemon.sprites.front_default} />
          <Title>{pokemon.name}</Title>
        </HeaderContainer>
        <Body>
          <Title>
            XP:
            {pokemon.base_experience}
          </Title>
          <Title>
            weight:
            {pokemon.weight * 0.1}
            {' '}
            kg
          </Title>
          <Title>
            height:
            {pokemon.height * 10}
            {' '}
            cm
          </Title>
          <Title>Abilities:</Title>
          {abilities
            .map(ability =>
              Object.values(ability.effect_entries).find(effect => effect.language.name === EN_LANG)
            )
            .map((i, idx) => (
              <Group>
                <Description>
                  Name:
                  {abilities[idx].name}
                </Description>
                <Description>{i.effect}</Description>
                <Description>{i.short_effect}</Description>
              </Group>
            ))}
          <Title>Stats:</Title>
          {pokemon.stats.map(i => (
            <Description>{`${i.stat.name} = ${i.base_stat}`}</Description>
          ))}
          <Title>Types:</Title>
          <Tags>
            {pokemon.types.map(i => (
              <Tag key={i.slot} color={TYPE_COLORS[i.type.name]}>
                {i.type.name}
              </Tag>
            ))}
          </Tags>
        </Body>
      </Container>
    )
  )
}
