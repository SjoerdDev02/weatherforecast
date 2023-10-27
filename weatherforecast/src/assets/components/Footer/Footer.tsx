import styles from './Footer.module.css';
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    const mailIcon = '/icons/socials/mail.svg';
    const linkedInIcon = '/icons/socials/linkedin.svg';
    const instagramIcon = '/icons/socials/instagram.svg';
    const githubIcon = '/icons/socials/github.svg';

  return (
    <footer className={styles.footerStyles}>
        <div className={styles.divider}></div>
        <NavLink to='/'><h1>WeatherForecast</h1></NavLink>
        <div className={styles.socials}>
            <Link to='/'><img src={mailIcon} alt='Icon of email' /></Link>
            <Link to='/'><img src={linkedInIcon} alt='Logo of LinkedIn' /></Link>
            <Link to='/'><img src={instagramIcon} alt='Logo of Instagram' /></Link>
            <Link to='/'><img src={githubIcon} alt='Logo of Github' /></Link>
        </div>
    </footer>
  );
}

export default Footer;