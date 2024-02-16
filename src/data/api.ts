import { env } from './../env'

// export function api(path: string, init?: RequestInit) {
//   const baseUrl = env.NEXT_PUBLIC_API_BASE_URL

//   const apiPrefix = '/api'

//   const url = new URL(apiPrefix.concat(path), baseUrl)

//   return fetch(url, init)
// }

class Api {
  private baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  private apiPrefix = '/api'

  public async get<T>(path: string, init?: RequestInit): Promise<T> {
    const url = new URL(this.apiPrefix.concat(path), this.baseUrl)
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    return await response.json()
  }

  public async post<T>(path: string, init?: RequestInit): Promise<T> {
    const url = new URL(this.apiPrefix.concat(path), this.baseUrl)
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    return await response.json()
  }

  public async put<T>(path: string, init?: RequestInit): Promise<T> {
    const url = new URL(this.apiPrefix.concat(path), this.baseUrl)
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
    return await response.json()
  }

  public async delete<T>(path: string, init?: RequestInit): Promise<T> {
    const url = new URL(this.apiPrefix.concat(path), this.baseUrl)
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
    return await response.json()
  }

  public async patch<T>(path: string, init?: RequestInit): Promise<T> {
    const url = new URL(this.apiPrefix.concat(path), this.baseUrl)
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    })
    return await response.json()
  }
}

export const api = new Api()
