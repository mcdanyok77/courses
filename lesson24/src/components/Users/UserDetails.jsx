import { useEffect, useState } from 'react'

export default function UserDetails({ userId }) {
  const { error, isPending, user } = useFetchUser(userId)

  if (isPending) {
    return <p>...</p>
  }

  if (error) {
    return <p>Unable to load user details</p>
  }

  if (!user) {
    return <p>No user details found</p>
  }

  return (
    <article>
      <h3>{user.firstName} {user.lastName}</h3>
      <p>age: {user.age}</p>
      <p>gender: {user.gender}</p>
    </article>
  )
}
