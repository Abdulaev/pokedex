import { stringify as stringifyQuery } from 'query-string'
import { REQUEST_METHODS } from 'common/enums'

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

class Api {
  private baseUrl: string = process.env.REACT_APP_URL

  changeUrl(url: string) {
    this.baseUrl = url
  }

  get<T, U>(url: string, params?: Params, body?: U): Promise<T> {
    return this.request<T, U>(this.baseUrl + url, REQUEST_METHODS.get, params, body)
  }

  async request<T, U>(url: string, method: REQUEST_METHODS, params?: Params, body?: U): Promise<T> {
    const query = stringifyQuery(params)
    const request = new Request(url + (query ? `?${query}` : ''), {
      ...body,
      method,
      headers: new Headers({
        Accept: 'application/json'
      })
    })

    const response = await fetch(request)
    return checkStatus<T>(response)
  }
}

export default new Api()
