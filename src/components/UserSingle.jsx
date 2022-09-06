import { useContext } from 'react'
import { UsersContext } from "../context/UsersContext";

function UserSingle({ users }) {

    const { deleteUser, autocompletaUser, readUser } = useContext(UsersContext);

    const clickDeleteUser = () => {
        deleteUser(users.id)
    }
    const clickUpdateUser = () => {
        autocompletaUser(users.id)
    };
    const clickDetail = () => {
        readUser(users.id)
    };

    return (
        <div className="card-deck ">
            <div className="card" >
                <img src={`https://avatars.dicebear.com/v2/avataaars/${users.username}.svg`}
                    alt="Evito warning"
                    className="card-img-top"
                    onClick={clickDetail}
                />
                <div className="card-body">
                    <h4 className="card-title">{users.name}</h4>
                    <p className="card-text">{users.email}</p>
                    <a className="card-text" target="_blank" rel="noreferrer" href={`https://www.${users.website}`}>{users.website}</a>
                    <p className="card-text">{users.phone}</p>

                    <button className='btn btn-secondary m-1' onClick={clickUpdateUser}>Edit</button>
                    <button className='btn btn-secondary m-1' onClick={clickDeleteUser}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default UserSingle