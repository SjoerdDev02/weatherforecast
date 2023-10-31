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
        watch,
        reset
    } = useForm();
  
    function onSubmit(data: FieldValues) {
        console.log(data);
        setIsSucces(true);
        setTimeout(() => {
            setIsCollapsed(true);
        }, 2000);
        reset();
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
                <div className={styles.inputGroup}>
                    {errors.oldPassword && <p>{String(errors.oldPassword.message)}</p>}
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
                    {errors.newPassword && <p>{String(errors.newPassword.message)}</p>}
                    <label htmlFor='newPassword'>New password</label>
                    <input 
                        type='password'
                        id='newPassword'
                        placeholder='********'
                        {...register('newPassword', {
                            required: "New password is required",
                            minLength: {
                                value: 6,
                                message: "New password must have at least 6 characters"
                            },
                            pattern: {
                                value: /^(?=.*[A-Z]).{6,}$/,
                                message: "New password must contain at least one uppercase letter"
                            },
                            validate: (value) =>
                                value !== watch('oldPassword') || "New password must be different",
                        })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    {errors.confirmPassword && <p>{String(errors.confirmPassword.message)}</p>}
                    <label htmlFor='confirmPassword'>Confirm new password</label>
                    <input 
                        type='password'
                        id='confirmPassword'
                        placeholder='********'
                        {...register('confirmPassword', {
                            required: "Password confirmation is required",
                            validate: (value) =>
                                value === watch('newPassword') || "Passwords do not match",
                        })}
                    />
                </div>
                <button disabled={isSubmitting}>Save Password</button>
            </form>}
        </article>
    );
}

export default PasswordForm;