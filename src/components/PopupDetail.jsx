import { useContext } from 'react'
import { UsersContext } from "../context/UsersContext";

function PopupDetail() {

    const { clickCerrar, userItem } = useContext(UsersContext)

    return (
        <div className='popup'>
            <div className='popup_open_detail'>
                <div className="mx-5">
                    <h3 className="card-title bg-dark text-white  mb-2">Detalle</h3>
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {userItem.name}</h5>
                        <h5 className="card-text">Username: {userItem.username}</h5>
                        <h5 className="card-text">Correo: {userItem.email}</h5>
                        <hr />
                        <h5 className="card-text">Calle: {userItem.street}</h5>
                        <h5 className="card-text">{userItem.suite}</h5>
                        <h5 className="card-text">Ciudad: {userItem.city}</h5>
                        <h5 className="card-text">Cod. Postal: {userItem.zipcode}</h5>
                        <hr />
                        <h5 className="card-text">Latitud:{userItem.lat} Longitud:{userItem.lng}</h5>
                        <hr />
                        <h5 className="card-text">Telefono: {userItem.phone}</h5>
                        <a target="_blank" rel="noreferrer" href={`https://www.${userItem.website}`}>{`https://www.${userItem.website}`}</a>
                        <hr />
                        <h5 className="card-text">Empresa: {userItem.company.name}</h5>
                    </div>
                    <button onClick={clickCerrar} className="btn btn-secondary mt-3">Cerrar</button>
                </div>
            </div>

        </div>


    )
}

export default PopupDetail