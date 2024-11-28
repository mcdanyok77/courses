import { useEffect, useState } from 'react'

export default function UsersList({ updateSelectedUser }) {
  const { error, isLoading, users } = useFetchUsers()

  function handleButtonClick(id) {
    updateSelectedUser(id)
  }

  if (isLoading) {
    return <p>...</p>
  }

  if (error) {
    return <p>Unable to load users</p>
  }

  if (!users?.length) {
    return <p>No users</p>
  }

  return (
    <ul className={styles.usersList}>
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => handleButtonClick(user.id)}>
            {user.id} - {user.firstName}
          </button>
        </li>
      ))}
    </ul>
  )
}
