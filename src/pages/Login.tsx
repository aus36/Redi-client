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
      <div className='contents'>
        <div className='header'>
          <img src='./redilogo.png' alt='Redi Logo' className='logo' />
          <p className='typewriter'>Hello! Welcome to Redi, your interview helper.</p>
        </div>
        
        <div className='login-form'>
          <form onSubmit={(e) => {e.preventDefault()}}>
            <input placeholder = 'Email' onChange = {(e) => {setUsername(e.target.value)}} type='text' id='username' name='username' />
            <input placeholder = 'Password' onChange={(e) => {setPassword(e.target.value)}} type='password' id='password' name='password' />
            <a href='/Home' className='forgot-password'>Forgot Password?</a>
            <button onClick = {() => {submit()}} type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login