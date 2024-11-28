import { useState } from 'react'
import Modal from './Modal.jsx'
import UserDetails from './Users/UserDetails.jsx'
import UsersList from './Users/UsersList.jsx'

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState(null)

  function updateSelectedUsers(id) {
    setSelectedUserId(id)
  }

  return (
    <>
      <h1>State & Forms</h1>
      {/* <UsersList updateSelectedUsers={updateSelectedUsers} />
      <UserDetails selectedUserId={selectedUserId} /> */}
      <Modal />
    </>
  )
}
