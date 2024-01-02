import styles from "../styles/Landing.module.css";
import LandingNavbar from "../components/LandingNavbar";
import Footer from "../components/Footer";
import Faang from "../assets/Faang.svg";

const Landing = () => {


  
  return (
    <div className={styles.main_container}>
      <LandingNavbar />
      <div className={styles.content_container}>
        <div className={styles.row_container}>
          <div className={styles.left_container}>
            <h1 className={styles.header}>Ace your behavioral interviews</h1>
            <p className={styles.description}>Redi is a tool that allows you to practice with questions commonly asked in the tech industry's behavioral interviews, sourced from real tech interviewers.</p>
            <button className={styles.startButton}>Get Started</button>
          </div>
          <div className={styles.right_container}>
            <img className={styles.image} src="https://imgs.search.brave.com/-VziZE7fGIaA_MGw2lvVO50FKY8-ipWUz8XCGzExDJU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dXNpbmVzcy1qb2It/aW50ZXJ2aWV3LWNv/bmNlcHRfMTQyMS03/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="Landing page image" />
          </div>
        </div>
        <p className={styles.endorsementText}>Featuring questions from:</p>
        <img className={styles.endorsementImage} src={Faang} alt="FAANG Logos" />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;