import React, { useState } from 'react'
import './styles/App.css'

function App() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  return (
    <div className='main-container'>
      <div className='header'>
        <img src='./redilogo.png' alt='Redi Logo' className='logo' />
        <p className='typewriter'>Hello! Welcome to Redi, your interview helper.</p>
      </div>
      
      <div className='login-form'>
        <form>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='username' />
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default App
