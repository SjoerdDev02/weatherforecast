import styles from './Settings.module.css';

const ProfileHeader = () => {
  return (
    <header className={styles.profileHeader}>
        <img src='/icons/overig/profile-john.png' alt='profile picture' />
        <h1>John's Preferences</h1>
    </header>
  );
}

export default ProfileHeader;