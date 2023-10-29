import styles from './Forecast.module.css';

const DetailComponentOne = ({icon, title, graph, info}: {icon: string, title: string, graph: string, info: string}) => {
    return (
        <article className={styles.detailComponentOne}>
            <header>
                <div>
                    <img src={icon} alt='Dynamically loaded image' />
                    <h3>{title}</h3>
                </div>
                <div></div>
            </header>
            <img src={graph} alt='Dynamically loaded graph' />
            <p>{info}</p>
        </article>
    );
}

const DetailComponentTwo = ({icon, title, graph, info}: {icon: string, title: string, graph: string, info: string}) => {
    return (
        <article className={styles.detailComponentTwo}>
            <div className={styles.detailContent}>
                <div>
                    <img src={icon} alt='Dynamically loaded image' />
                    <h3>{title}</h3>
                </div>
                <p>{info}</p>
            </div>
            <img src={graph} alt='Dynamically loaded graph' />
        </article>
    );
}

const DetailNumbers = () => {
  return (
    <section className={styles.detailNumbersContainer}>
        <DetailComponentOne icon={'/icons/weather/uv-index.svg'} title={'UV Index'} graph={'/icons/weather/uv-index-indication.svg'} info={'Use Sun Protection Until 3PM'} />
        <DetailComponentOne icon={'/icons/weather/sunset.svg'} title={'Sunset'} graph={'/images/sunset-indication.png'} info={'Sunrise 6:01AM'} />
        <DetailComponentTwo icon={'/icons/weather/wind.svg'} title={'Wind'} graph={'/icons/weather/wind-indication.svg'} info={'Wind is currently 4 km/h from the west.'} />
        <DetailComponentTwo icon={'/icons/weather/pressure.svg'} title={'Pressure'} graph={'/icons/weather/pressure-indication.svg'} info={'Pressure is currently 1,022 hPa and steady'} />
    </section>
  );
}

export default DetailNumbers;