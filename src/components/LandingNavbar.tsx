import { Link } from "react-router-dom";
import styles from "../styles/LandingNavbar.module.css";

const LandingNavbar = () => {

    return (
        <div className={styles.landingNavbarContainer}>
            <div className={styles.landingNavbarLinks}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default LandingNavbar;