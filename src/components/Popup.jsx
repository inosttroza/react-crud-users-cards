import '../css/popup.css';
import { useContext } from 'react'
import { UsersContext } from "../context/UsersContext";
import { useState, useEffect } from 'react'

function Popup() {

    const { clickCerrar, userItem, updateUser } = useContext(UsersContext)

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [web, setWeb] = useState('')

    useEffect(() => {
        setNombre(userItem.name)
        setEmail(userItem.email)
        setTelefono(userItem.phone)
        setWeb(userItem.website)
    }, [])

    const clickSave = () => {
        userItem.name = nombre;
        userItem.email = email;
        userItem.phone = telefono;
        userItem.website = web;
        updateUser(userItem)
    }

    return (
        <div className='popup'>
            <div className='popup_open'>
                <div className="mx-5">
                    <h3 className="card-title bg-dark text-white">Editar</h3>
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
                    <button onClick={clickSave} className="btn btn-secondary mx-2">Guardar</button>
                    <button onClick={clickCerrar} className="btn btn-secondary mx-2">Cerrar</button>
                </div>
            </div>
        </div>
    );
}
export default Popup