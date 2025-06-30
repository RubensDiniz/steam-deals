import axios, { AxiosRequestConfig } from 'axios'

const makeFetcher = (options?: AxiosRequestConfig) => {
  return async (endpoint: string, data?: { arg: unknown }) => {
    // This is a public API, so there's no need to hide it under a .env
    const baseUrl = 'https://www.cheapshark.com/api/1.0'

    const response = await axios(`${baseUrl}${options?.url ?? endpoint}`, {
      ...options,
      headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
      },
      data: data?.arg,
      // withCredentials: true,
    })

    if (response.headers.getContentLength === 0) return null

    return response
  }
}

export const get = makeFetcher

// TODO! Delete
export const post = (options?: AxiosRequestConfig) => makeFetcher({ ...options, method: 'POST' })

export const patch = (options?: AxiosRequestConfig) => makeFetcher({ ...options, method: 'PATCH' })

export const del = (options?: AxiosRequestConfig) => makeFetcher({ ...options, method: 'DELETE' })
