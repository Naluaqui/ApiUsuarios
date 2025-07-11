import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/BtnDarkTrash.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
    

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }
  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value
    })
    getUsers()
  }
  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type="text" ref={inputName}/>
        <input name='idade' type="number" ref={inputAge}/>
        <input name='Email' type="email" ref={inputEmail}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      
    <div className='users-list'>
      {users.map((user) => (
        <div key={user.id} className='user-card'>
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Lixo-btn" className='animationShake'/>
          </button>
        </div>

      ))}
    </div>
    </div>
  )
}

export default Home
