import { useAsObservableSource, useLocalStore } from 'mobx-react'
import { parse } from 'query-string'
import { useEffect } from 'react'
import { reaction } from 'mobx'

export const usePaginationStore = (search: string) => {
  const observedSearch = useAsObservableSource({ search })
  const parsedParams = parse(observedSearch.search)

  const pagination = useLocalStore(() => ({
    pageNumber: parsedParams?.pageNumber ? Number(parsedParams.pageNumber) : 1,
    pageLimit: parsedParams?.pageLimit ? Number(parsedParams.pageLimit) : 20,
    changePageNumber(page: number) {
      this.pageNumber = page
    },
    changePageLimit(limit: number) {
      this.pageLimit = limit
      this.pageNumber = 1
    }
  }))

  useEffect(
    () =>
      reaction(
        () => observedSearch.search,
        () => {
          if (!observedSearch.search) pagination.changePageLimit(20)
        }
      ),
    []
  )

  return pagination
}
