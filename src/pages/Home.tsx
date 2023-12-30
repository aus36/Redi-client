import styles from "../styles/Home.module.css";

function Home() {
  
    return (
      <div className={styles.main_container}>
        <div className={styles.header}>
          <img src='./redilogo.png' alt='Redi Logo' className={styles.logo} />
          <p>This is the home screen.</p>
        </div>
      </div>
    )
  }
  
  export default Home