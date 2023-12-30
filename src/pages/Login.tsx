import { useState } from 'react'
import styles from '../styles/Login.module.css'
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
    <div className={styles.main_container}>
      <div className={styles.contents}>
        <div className={styles.div}>
          <img src='./redilogo.png' alt='Redi Logo' className={styles.logo} />
          <p className={styles.typewriter}>Hello! Welcome to Redi, your interview helper.</p>
        </div>
        
        <div className={styles.form}>
          <form onSubmit={(e) => {e.preventDefault()}}>
            <input className = {styles.input} placeholder = 'Email' onChange = {(e) => {setUsername(e.target.value)}} type='text' id='username' name='username' />
            <input className = {styles.input} placeholder = 'Password' onChange={(e) => {setPassword(e.target.value)}} type='password' id='password' name='password' />
            <a href='/Home' className={styles.forgot_password}>Forgot Password?</a>
            <button className = {styles.login_button} onClick = {() => {submit()}} type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login