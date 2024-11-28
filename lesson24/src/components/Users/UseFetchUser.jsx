import { useEffect, useState } from 'react'

export default function useFetchUser(id) {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      setIsPending(true)
      setError(null)

      const response = await fetch(`https://dummyjson.com/users/${id}`)

      setIsPending(false)

      if (response.ok) {
        const fetchedUser = await response.json()

        setUser(fetchedUser)
      } else {
        setError(`${response.status} - ${response.statusText}`)
      }
    }

    fetchUser()
  }, [id])

  return {
    error,
    isPending,
    user
  }
}
