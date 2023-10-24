import { useEffect, useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import axios from 'axios'
import { BASE_URL, EMPTY_VALUES } from './constants/users'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UsersList from './components/UsersList'
import { data } from 'autoprefixer'
function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([])
  const [userToEdit, setUserToEdit] = useState(null)

  const { handleSubmit, register, reset, formState } = useForm();
  const {errors} = formState;
   
  const submit = (data) => {
    if(userToEdit){
      updateUser(data) 
      handleCloseModal()
    }else{
      createUser(data)
    }
  };

  const handleOpenModal = () => {
    setIsShowModal(true)
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
    reset(EMPTY_VALUES)
    setUserToEdit(null)
  }

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        handleCloseModal()
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}`)
      .then(() => {
        getAllUsers()
      })
      .catch((err) => console.log(err))

  }
  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal()
    reset(userToUpdate)
    setUserToEdit(userToUpdate.id)
  }

  const updateUser=(data)=>{
    axios
      .put(BASE_URL + `/users/${userToEdit}/`, data)
      .then(() => {
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className='min-h-screen'>
      <Modal errors={errors} userToEdit={userToEdit} isShowModal={isShowModal} handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} register={register} submit={submit} />
      <Header handleOpneModal={handleOpenModal} />
      <UsersList deleteUser={deleteUser} users={users} handleClickUpdate={handleClickUpdate} />
    </main>
  )
}

export default App
