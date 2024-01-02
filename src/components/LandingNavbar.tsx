import { Link } from "react-router-dom";
import styles from "../styles/LandingNavbar.module.css";
import { useNavigate } from "react-router-dom";

const LandingNavbar = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.landingNavbarContainer}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>Redi</p>
            </div>
            <div className={styles.linkContainer}>
                <Link className={styles.link} to="/register">Register</Link>
                <Link className={styles.link} to="/about">About</Link>
                <Link className={styles.link} to="/contact">Contact</Link>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={() => navigate("/login")} className={styles.button}>Login</button>
            </div>
        </div>
    );
};

export default LandingNavbar;