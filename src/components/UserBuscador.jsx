import { useContext } from 'react'
import { UsersContext } from "../context/UsersContext";

function UserBuscador() {

    const { openPupupAdd, handleChange } = useContext(UsersContext)

    return (
        <div className="col-md-5 mx-auto bg-light mt-4">
            <div className="mx-5">
                <input
                    type="text"
                    placeholder="Buscar..."
                    //value={buscar}
                    // onChange={(e) => setBuscar(e.target.value)}
                    onChange={handleChange}
                    className="form-control mt-4 mb-2"
                />
                <button className='btn btn-secondary m-1 form-control' onClick={openPupupAdd}>Crear</button>
            </div>
            <hr />
        </div>
    )
}

export default UserBuscador