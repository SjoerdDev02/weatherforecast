import { Location } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from './UserNavigation.module.css';

const forecastIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9997 18.5H16C18.1604 18.5 20.2875 18.754 22.3822 19.2619C24.476 19.7697 26.5396 20.5304 28.5733 21.5457C29.4557 22.0027 30.1629 22.6635 30.7 23.5377C31.2348 24.4083 31.5012 25.3586 31.5 26.3994V26.4V31.5H0.5V26.4C0.5 25.3575 0.767197 24.4063 1.30203 23.5357C1.83911 22.6614 2.54575 22.0014 3.42654 21.5457C5.46034 20.5291 7.52398 19.7677 9.61783 19.2599C11.7124 18.752 13.8394 18.4987 15.9997 18.5ZM32 31.5V32H31.5L32 31.5ZM16 15.5C13.9337 15.5 12.1772 14.7701 10.7036 13.2964C9.22991 11.8228 8.5 10.0663 8.5 8C8.5 5.93366 9.22991 4.1772 10.7036 2.70355C12.1772 1.22991 13.9337 0.5 16 0.5C18.0663 0.5 19.8228 1.22991 21.2964 2.70355C22.7701 4.1772 23.5 5.93366 23.5 8C23.5 10.0663 22.7701 11.8228 21.2964 13.2964C19.8228 14.7701 18.0663 15.5 16 15.5Z" style={{ fill: 'var(--dark-blue)', stroke: 'var(--dark-blue)' }} />
</svg>;

const forecastActiveIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16C13.8 16 11.9167 15.2167 10.35 13.65C8.78333 12.0833 8 10.2 8 8C8 5.8 8.78333 3.91667 10.35 2.35C11.9167 0.783334 13.8 0 16 0C18.2 0 20.0833 0.783334 21.65 2.35C23.2167 3.91667 24 5.8 24 8C24 10.2 23.2167 12.0833 21.65 13.65C20.0833 15.2167 18.2 16 16 16ZM0 32V26.4C0 25.2667 0.292 24.2247 0.876 23.274C1.46 22.3233 2.23467 21.5987 3.2 21.1C5.26667 20.0667 7.36667 19.2913 9.5 18.774C11.6333 18.2567 13.8 17.9987 16 18C18.2 18 20.3667 18.2587 22.5 18.776C24.6333 19.2933 26.7333 20.068 28.8 21.1C29.7667 21.6 30.542 22.3253 31.126 23.276C31.71 24.2267 32.0013 25.268 32 26.4V32H0Z" style={{ fill: 'var(--dark-blue)' }} />
</svg>;
  
  const ForecastItem = ({location}: { location: Location }) => {
    return (
      <NavLink aria-label="Forecast" to="/forecast" className={`${styles.navItem} ${location.pathname === '/forecast' && styles.active}`}>
        {location.pathname === '/forecast' ? forecastActiveIcon : forecastIcon}
      </NavLink>
    );
  };
  
export default ForecastItem;