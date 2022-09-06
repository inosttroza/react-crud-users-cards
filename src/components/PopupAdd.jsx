import { useState } from 'react'
import { UsersContext } from "../context/UsersContext";
import { useContext } from 'react'
import '../css/popup.css';

function PopupAdd() {

    const { clickCerrar, addUser } = useContext(UsersContext)

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [web, setWeb] = useState('')

    const clickAdd = () => {
        const userItem = {
            nombre,
            email,
            telefono,
            web
        }
        addUser(userItem)
    }

    return (
        <div className='popup'>
            <div className='popup_open'>
                <div className="mx-5">
                    <h3 className="card-title bg-dark text-white">Agregar</h3>
                    <div className="card-body">
                        <input type="text"
                            placeholder="nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                            className="form-control mt-4 mb-2"
                        ></input>
                        <input type="text"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="form-control mt-4 mb-2"
                        ></input>
                        <input type="text"
                            placeholder="telefono"
                            onChange={(e) => setTelefono(e.target.value)}
                            value={telefono}
                            className="form-control mt-4 mb-2"
                        ></input>
                        <input type="text"
                            placeholder="web"
                            onChange={(e) => setWeb(e.target.value)}
                            value={web}
                            className="form-control mt-4 mb-2"
                        ></input> </div>
                    <button onClick={clickAdd} className="btn btn-secondary mx-2">Guardar</button>
                    <button onClick={clickCerrar} className="btn btn-secondary mx-2">Cerrar</button>
                </div>
            </div>
        </div>
    )
}

export default PopupAdd