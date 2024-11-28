import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('https://dummyjson.com/users?limit=10')

  return response.json()
}

export default function useFetchUsers() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher)

  return {
    error,
    isLoading,
    users: data?.users
  }
}
