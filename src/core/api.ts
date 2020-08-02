import { stringify as stringifyQuery } from 'query-string'

interface Params {
  [key: string]: string | number
}

const checkStatus = async <T>(response: Response): Promise<T> => {
  if (response?.status >= 200 && response?.status < 300) {
    const data: T = await response.json()

    return Promise.resolve(data)
  }

  throw new Error()
}

export default class Api {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  static async get<T>(url: string, params?: Params): Promise<T> {
    const query = stringifyQuery(params)
    const request = new Request(url + query, {
      headers: new Headers({
        Accept: 'application/json'
      })
    })

    const response = await fetch(request)
    return checkStatus<T>(response)
  }

  async get<T>(url: string, params?: Params): Promise<T> {
    const query = stringifyQuery(params)
    const request = new Request(this.baseUrl + url + query, {
      headers: new Headers({
        Accept: 'application/json'
      })
    })

    const response = await fetch(request)
    return checkStatus<T>(response)
  }
}
