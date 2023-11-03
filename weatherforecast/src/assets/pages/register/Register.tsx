import { CSSProperties, useState } from 'react';
import { useForm, type FieldValues } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import styles from './Register.module.css';
import VisitorLayout from '../../layouts/VisitorLayout/VisitorLayout';
import Glass from '../../components/Glass/Glass';
import VisitorNavigation from '../../components/VisitorNavigation/VisitorNavigation';
import Footer from '../../components/Footer/Footer';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import registerUserInDatabase from './registerUserInDatabase';
import { setUser } from '../../stores/user';
import useGetDatabase from "../../hooks/useGetDatabase";
import useCheckRegister from '../../hooks/useCheckRegister';

const RegisterForm = () => {
    const [error, setError] = useState(false);

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        watch,
        reset
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const existingUsers = useGetDatabase();
    const checkRegister = useCheckRegister();

    async function onSubmit(data: FieldValues) {
        const validUser = await checkRegister(data.email);

        if (validUser) {
            const newUser = await registerUserInDatabase(data, existingUsers);

            if (newUser) {
                dispatch(setUser(newUser));
                reset();
                navigate('/forecast');
            } else {
                setError(true);
            }
        } else {
            setError(true);
        }
    }

    return (
        <section className={styles.formContainer}>
            <h1>Signup</h1>
            {error && <p>Registering user failed. Emailadress already exists.</p>}
            <form role="form" onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    {errors.email && <p>{String(errors.email.message)}</p>}
                    <label htmlFor='emailRegister'>Email adress</label>
                    <input 
                        type='email'
                        id='emailRegister'
                        placeholder='name@email.com'
                        {...register('email', {
                        required: "Email is required",
                        })}
                    />
                </div>
                {errors.firstName && <p>{String(errors.firstName.message)}</p>}
                {errors.lastName && <p>{String(errors.lastName.message)}</p>}
                <div className={styles.formBundle}>
                    <div className={styles.formGroup}>
                        <label htmlFor='firstNameRegister'>First Name</label>
                        <input 
                            type='text'
                            id='firstNameRegister'
                            placeholder='John'
                            {...register('firstName', {
                            required: "Firstname is required",
                            })}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='lastNameRegister'>Last Name</label>
                        <input 
                            type='text'
                            id='lastNameRegister'
                            placeholder='Smith'
                            {...register('lastName', {
                            required: "Lastname is required",
                            })}
                        />
                    </div>
                </div>
                {errors.password && <p>{String(errors.password.message)}</p>}
                {errors.passwordConfirm && <p>{String(errors.passwordConfirm.message)}</p>}
                <div className={styles.formBundle}>
                    <div className={styles.formGroup}>
                        <label htmlFor='passwordRegister'>Password</label>
                        <input 
                            type='password'
                            id='passwordRegister'
                            placeholder='********'
                            {...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must have at least 6 characters"
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z]).{6,}$/,
                                    message: "Password must contain at least one uppercase letter"
                                }
                            })}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='passwordConfirmRegister'>Password Confirm</label>
                        <input 
                            type='password'
                            id='passwordConfirmRegister'
                            placeholder='********'
                            {...register('passwordConfirm', {
                                required: "Password confirmation is required",
                                validate: (value) =>
                                    value === watch('password') || "Passwords do not match",
                            })}
                        />
                    </div>
                </div>
                <SubmitButton disabled={isSubmitting}>Create Account</SubmitButton>
            </form>
            <p>Already have an account? <NavLink to='/register'>Login</NavLink></p>
        </section>
    );
  }

  const Register = () => {
    const backgroundImg = {
      phone: '/backgrounds/register/phone-register-bg.jpg',
      desktop: '/backgrounds/register/desktop-register-bg.jpg',
    };

    const glassStyles: CSSProperties = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
        margin: '2rem',
        width: '90vw',
        minHeight: '90vh',
    }

    return (
        <VisitorLayout background={backgroundImg}>
            <Glass customStyles={glassStyles}>
                <VisitorNavigation />
                <RegisterForm />
                <Footer />
            </Glass>
        </VisitorLayout>
    );
}

export default Register;