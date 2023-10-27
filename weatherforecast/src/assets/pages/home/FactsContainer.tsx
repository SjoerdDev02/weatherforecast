import styles from './Home.module.css';

const FactsContainer = () => {
    const freeIcon = '/icons/overig/free.svg';
    const placesIcon = '/icons/overig/places.svg';
    const usersIcon = '/icons/overig/users.svg';

    return (
        <section className={styles.factsContainer}>
            <div>
                <img src={freeIcon} alt='Icon that shows free to use' />
                <h2>100%</h2>
                <h5>Free to use</h5>
            </div>
            <div>
                <img src={placesIcon} alt='Icon that shows 300+ places to choose' />
                <h2>300+</h2>
                <h5>Places to choose</h5>
            </div>
            <div>
                <img src={usersIcon} alt='Icon that shows 2000+ active users' />
                <h2>2000+</h2>
                <h5>Active users</h5>
            </div>
        </section>
    );
}

export default FactsContainer;


/* import React, { useEffect, useRef } from 'react';

const AnimatedComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Als de helft van het element in de viewport is
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Voer hier je animatiecode uit
          console.log('Element is in de viewport');
          // Voeg hier de code toe voor het starten van je animatie met CSS-transities of JavaScript-animaties
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div ref={elementRef} style={{ width: '100px', height: '100px', background: 'red' }}>
      Animated Component
    </div>
  );
};

export default AnimatedComponent; */