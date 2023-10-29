import styles from './Settings.module.css';

const NameMailForm = () => {
  return (
    <form className={styles.nameMailFormContainer}>
        <div className={styles.inputGroup}>
            <label htmlFor='emailAdress'>Email adress</label>
            <input type='email' id='emailAdress' placeholder='name@email.com' />
        </div>
        <div className={styles.inputBundle}>
            <div className={styles.inputGroup}>
                <label htmlFor='firstName'>First name</label>
                <input type='text' id='firstName' placeholder='John' />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor='lastName'>Last name</label>
                <input type='text' id='lastName' placeholder='Smith' />
            </div>
        </div>
    </form>
  );
}

export default NameMailForm;