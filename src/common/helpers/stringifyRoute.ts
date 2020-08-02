import { ROUTES } from 'common/enums'
import { stringify as stringifyQuery } from 'query-string'

const empty = Symbol('empty')
type Empty = typeof empty

export const stringifyRoute = <P extends string | Empty, Q extends string | Empty>(
  route: ROUTES,
  params: P extends string ? Record<P, string> : null,
  query: Q extends string ? Partial<Record<Q, string>> : null
) =>
  Object.keys(params).reduce((res, param) => {
    return res.replace(`:${param}`, params[param])
  }, route) + (query ? `?${stringifyQuery(query)}` : '')
