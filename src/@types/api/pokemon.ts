import { TRemoteSource } from '@types'

export interface RequestParams {
  pageLimit: number
  pageNumber: number
}
export interface LoadPokemonsResult {
  previous: null | string
  next: null | string
  count: number
  results: TRemoteSource[]
}
