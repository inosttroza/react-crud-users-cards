import UserList from "./components/UserList";
import UserBuscador from "./components/UserBuscador";
import Popup from "./components/Popup";
import PopupDetail from "./components/PopupDetail";
import PopupAdd from "./components/PopupAdd";
import { UsersContext } from "./context/UsersContext";
import { useContext } from 'react'

function App() {

  const { modalOpen, modalOpenDetail, modalOpenAdd } = useContext(UsersContext);

  return (
    <div className="bg-light">
      <UserBuscador />
      <UserList />
      {modalOpen && <Popup />}
      {modalOpenDetail && <PopupDetail />}
      {modalOpenAdd && <PopupAdd />}
    </div>
  )
}

export default App;
