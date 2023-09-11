import { useState } from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  // import navigation
  const navigate = useNavigate();

  // useStates for form information
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // function to handle form submission (will just route past auth for now)
  // TODO: add auth
  function submit() {
    console.log('username: ', username);
    console.log('password: ', password);
    navigate('/Home');
  }

  return (
    <div className='main-container'>
      <div className='header'>
        <img src='./redilogo.png' alt='Redi Logo' className='logo' />
        <p className='typewriter'>Hello! Welcome to Redi, your interview helper.</p>
      </div>
      
      <div className='login-form'>
        <form>
          <label htmlFor='username'>Username</label>
          <input onChange = {(e) => {setUsername(e.target.value)}} type='text' id='username' name='username' />
          <label htmlFor='password'>Password</label>
          <input onChange={(e) => {setPassword(e.target.value)}} type='password' id='password' name='password' />
          <button onClick = {() => {submit()}} type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login