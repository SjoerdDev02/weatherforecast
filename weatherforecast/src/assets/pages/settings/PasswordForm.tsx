import { useState } from 'react';
import { useForm, type FieldValues } from "react-hook-form";
import styles from './Settings.module.css';

const PasswordForm = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isSucces, setIsSucces] = useState(false);

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset
    } = useForm();
  
    function onSubmit(data: FieldValues) {
        console.log(data);
        setIsSucces(true);
        setTimeout(() => {
            setIsCollapsed(true);
        }, 2000);
        reset();
        // met state aangeven dat submit is gelukt en form sluiten
    }

    const collapseForm = () => {
        if (isCollapsed) {
            setIsSucces(false);
        }
        setIsCollapsed((previousValue) => !previousValue);
    }

    return (
        <article className={styles.passwordFormContainer}>
            <header onClick={collapseForm}>
                <h3>Change password?</h3>
                <i>&#9662;</i>
            </header>
            {isSucces && <p>Changing password succeeded!</p>}
            {!isCollapsed && <form onSubmit={handleSubmit(onSubmit)}>
                {errors.oldPassword && <p>{String(errors.oldPassword.message)}</p>}
                {errors.newPassword && <p>{String(errors.newPassword.message)}</p>}
                {errors.confirmPassword && <p>{String(errors.confirmPassword.message)}</p>}
                <div className={styles.inputGroup}>
                    <label htmlFor='oldPassword'>Old password</label>
                    <input 
                        type='password'
                        id='oldPassword'
                        placeholder='********'
                        {...register('oldPassword', {
                        required: "Old password is required",
                        })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='newPassword'>New password</label>
                    <input 
                        type='password'
                        id='newPassword'
                        placeholder='********'
                        {...register('newPassword', {
                        required: "New password is required",
                        })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='confirmPassword'>Confirm new password</label>
                    <input 
                        type='password'
                        id='confirmPassword'
                        placeholder='********'
                        {...register('confirmPassword', {
                        required: "Password confirmation is required",
                        })}
                    />
                </div>
                <button disabled={isSubmitting}>Save Password</button>
            </form>}
        </article>
    );
}

export default PasswordForm;