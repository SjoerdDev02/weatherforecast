import styles from './Register.module.css';
import { CSSProperties } from 'react';
import { useForm, type FieldValues } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import VisitorLayout from '../../layouts/VisitorLayout/VisitorLayout';
import Glass from '../../components/Glass/Glass';
import VisitorNavigation from '../../components/VisitorNavigation/VisitorNavigation';
import Footer from '../../components/Footer/Footer';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

const RegisterForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data: FieldValues) {
      console.log(data);
      reset();
      navigate('/');
  }

  return (
    <section className={styles.formContainer}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className={styles.formBundle}>
                {errors.firstName && <p>{String(errors.firstName.message)}</p>}
                {errors.lastName && <p>{String(errors.lastName.message)}</p>}
                <div className={styles.formGroup}>
                    <label htmlFor='firstNameRegister'>First Name</label>
                    <input 
                      type='text'
                      id='firstNameRegister'
                      placeholder='name@email.com'
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
                      placeholder='name@email.com'
                      {...register('lastName', {
                      required: "Lastname is required",
                      })}
                    />
                </div>
            </div>
            <div className={styles.formBundle}>
                {errors.password && <p>{String(errors.password.message)}</p>}
                {errors.passwordConfirm && <p>{String(errors.passwordConfirm.message)}</p>}
                <div className={styles.formGroup}>
                    <label htmlFor='passwordRegister'>Password</label>
                    <input 
                      type='password'
                      id='passwordRegister'
                      placeholder='********'
                      {...register('password', {
                      required: "Password is required",
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
                      })}
                    />
                </div>
            </div>
            <SubmitButton
              disabled={isSubmitting}
            >
            Create Account
            </SubmitButton>
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