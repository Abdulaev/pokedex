export interface GameIndicies {
  game_index: number
  version: TRemoteSource
}

export interface GenerationISprites {
  back_default: string | null
  back_gray: string | null
  front_default: string | null
  front_gray: string | null
}

export interface Sprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: {
    front_default: string | null
    front_female: string | null
  }
  versions: {
    'generation-i': {
      'red-blue': GenerationISprites
      yellow: GenerationISprites
    }
  }
}

export interface Statistic {
  base_stat: number
  effort: number
  stat: TRemoteSource
}

export interface PokemonTypes {
  slot: number
  type: TRemoteSource
}

export interface Abilities extends TRemoteSource {
  is_hidden: boolean
  slot: number
}

export interface Pokemon {
  abilities: Abilities[]
  base_experience: number
  forms: TRemoteSource[]
  game_indices: GameIndicies[]
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  name: string
  order: number
  species: TRemoteSource
  sprites: Sprites
  stats: Statistic[]
  types: PokemonTypes[]
  weight: number
}

export type TRemoteSource = {
  name: string
  url: string
}
