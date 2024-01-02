import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.linkContainer}>
                <Link className={styles.link} to="/privacy">Privacy Policy</Link>
                <Link className={styles.link} to="/terms">Terms of Use</Link>
                <Link className={styles.link} to="/contact">Contact</Link>
                <Link className={styles.link} to="/faq">FAQs</Link>
                <Link className={styles.link} to="/about">About us</Link>
                <Link className={styles.link} to="/careers">Careers</Link>
            </div>
        </div>
    );
};

export default Footer;