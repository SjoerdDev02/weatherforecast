import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../Preferences.module.css';
import { setUser } from '../../../stores/user';
import { UserType } from '../../../types/UserType';

const PreferencesHeader = ({ user }: { user: UserType }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handlePictureClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];

        const changedUser: UserType = {
            id: user.id,
            picture: selectedFile ? URL.createObjectURL(selectedFile) : user.picture,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            temperature: user.temperature,
            mode: user.mode,
            cityOne: user.cityOne,
            cityTwo: user.cityTwo,
            cityThree: user.cityThree,
        };
        dispatch(setUser(changedUser));
    };

    const displayedFirstName = user.firstName.endsWith('s') ? `${user.firstName}'` : `${user.firstName}'s`;

    return (
        <header className={styles.profileHeader}>
            <button onClick={handlePictureClick}><img src={user.picture} alt='profile picture' /></button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <h1>{displayedFirstName} Preferences</h1>
        </header>
    );
};

export default PreferencesHeader;