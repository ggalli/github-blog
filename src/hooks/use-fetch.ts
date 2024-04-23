import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

export function useFetch<Response = unknown>(path: string) {
  const [data, setData] = useState<Response>()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      api
        .get(path)
        .then((response) => setData(response.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false))
    }, 2000)
  }, [path])

  return {
    data,
    error,
    isLoading,
  }
}
