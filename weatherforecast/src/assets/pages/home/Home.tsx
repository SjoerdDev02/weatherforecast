import VisitorLayout from '../../layouts/VisitorLayout/VisitorLayout';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import VisitorNavigation from '../../components/VisitorNavigation/VisitorNavigation';
import Glass from '../../components/Glass/Glass';
import FactsContainer from './FactsContainer';
import { CSSProperties } from 'react';
import Button from '../../components/Button/Button';

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <h6 className={styles.quote}>No 1 Weather App</h6>
            <h1 className={styles.headingOne}>The only weather forecast app you will need in your life</h1>
            <h3 className={styles.subHeading}>WeatherForecast is the most accurate and flexible weather application you have ever seen.</h3>
            <Button page='/register'>Create Account</Button>
        </section>
    );
}

const Preview = () => {
    const previewImg = '/images/desktop-preview.png';

    return (
        <div className={styles.previewContainer}>
            <img className={styles.previewImg} src={previewImg} alt='Preview of the weather application' />
            <FactsContainer />
            <Button page='/register'>Create Account</Button>
        </div>
    );
}

const Home = () => {
  const backgroundImg = {
    phone: '/backgrounds/home/phone-home-bg.jpg',
    desktop: '/backgrounds/home/desktop-home-bg.jpg',
  };

  const glassStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1rem',
    margin: '2rem',
    width: '90vw',
  }

  return (
    <>
        <VisitorLayout background={backgroundImg}>
            <Glass customStyles={glassStyles}>
                <VisitorNavigation />
                <Introduction />
                <Preview />
                <Footer />
              </Glass>
        </VisitorLayout>
    </>
  );
}

export default Home;