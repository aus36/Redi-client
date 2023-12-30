import styles from "../styles/Landing.module.css";
import LandingNavbar from "../components/LandingNavbar";

const Landing = () => {


  
  return (
    <div className={styles.main_container}>
      <LandingNavbar />
      <div className={styles.row_container}>
        <div className={styles.left_container}>
          <h1 className={styles.header}>Landing</h1>
          <h2 className={styles.subheader}>Ace your behavioral tech interviews</h2>
          <p className={styles.description}>Redi is a tool that allows you to practice with questions commonly asked in the tech industry's behavioral interviews.</p>
        </div>
        <div className={styles.right_container}>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;