import { createContext, useState, useEffect } from 'react'

export const UsersContext = createContext();//nombre del contexto

export function UsersContextProvider(props) {

    const [users, setUsers] = useState([]);
    const [userItem, setUserItem] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenDetail, setModalOpenDetail] = useState(false);
    const [modalOpenAdd, setModalOpenAdd] = useState(false);
    const [buscar, setBuscar] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((er) => console.log(er));
    }, [])

    const deleteUser = (id) => {
        setUsers(users.filter(x => x.id !== id))
    }

    const autocompletaUser = (id) => {
        setModalOpen(true);
        const item = users.find((x) => x.id === id);
        setUserItem({
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website,
        });
    };

    const clickCerrar = () => {
        setModalOpen(false)
        setModalOpenAdd(false)
        setModalOpenDetail(false)
    };
    const updateUser = (userItem) => {
        const updUser = [...users];
        const newLista = [];
        updUser.map((item) => {
            if (item.id === userItem.id) {
                newLista.push({
                    ...item,
                    name: userItem.name,
                    email: userItem.email,
                    phone: userItem.phone,
                    website: userItem.website,
                });
            }
            else {
                newLista.push(item);
            }
            return newLista //solo para evitar el warning. Se puede borrar la linea
        })
        setUsers(newLista)
        setModalOpen(false);
    };

    const openPupupAdd = () => {
        setModalOpenAdd(true)
    };
    const addUser = (userItem) => {
        setModalOpenAdd(true)
        let id = 1;
        if (users.length !== 0)
            id = users[users.length - 1].id + 1
        const newRow = {
            id: id,
            name: userItem.nombre,
            email: userItem.email,
            phone: userItem.telefono,
            website: userItem.web,
        };
        setUsers([...users, newRow])
        setModalOpenAdd(false)
    };

    const readUser = (id) => {
        setModalOpenDetail(true);
        const item = users.find((x) => x.id === id);
        setUserItem({
            id: item?.id,
            name: item?.name ?? "sin dato",
            username: item?.username ?? "sin dato",
            email: item?.email ?? "sin dato",
            street: item?.address?.street ?? "sin dato",
            suite: item?.address?.suite ?? "sin dato",
            city: item?.address?.city ?? "sin dato",
            zipcode: item?.address?.zipcode ?? "sin dato",
            lat: item?.address?.geo?.lat ?? "sin dato",
            lng: item?.address?.geo?.lng ?? "sin dato",
            phone: item?.phone ?? "sin dato",
            website: item?.website ?? "sin dato",
            company: item?.company ?? "sin dato"
        });
    };

    //buscador
    function handleChange(event) {
        setBuscar(event.target.value);
    }
    const results = !buscar ? users : users.filter((dato) => dato.name.toLowerCase().includes(buscar.toLocaleLowerCase()))


    return (
        <UsersContext.Provider value={{
            users: results
            , deleteUser
            //editar
            , autocompletaUser
            , modalOpen
            , clickCerrar
            , userItem
            , updateUser
            //detalle
            , modalOpenDetail
            , readUser
            //add
            , modalOpenAdd
            , openPupupAdd
            , addUser
            //buscar
            , handleChange
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}
