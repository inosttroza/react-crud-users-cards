import UserSingle from './UserSingle'
import { useContext } from 'react'
import { UsersContext } from "../context/UsersContext";

function UserList() {

  const { users } = useContext(UsersContext);

  if (users.length === 0) {
    return <div className="alert alert-dark mx-4 font-size" role="alert">
      <h4>Sin registros...</h4>
    </div>
  }

  return (
    <div className="row row-cols-md-6">
      {
        users.map((x) => (
          <UserSingle key={x.id} users={x} />
        ))
      }
    </div>
  )
}

export default UserList