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