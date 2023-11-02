import styles from "./Login.module.css";
import { CSSProperties, useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import VisitorLayout from "../../layouts/VisitorLayout/VisitorLayout";
import Glass from "../../components/Glass/Glass";
import VisitorNavigation from "../../components/VisitorNavigation/VisitorNavigation";
import Footer from "../../components/Footer/Footer";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import useCheckLogin from "../../hooks/useCheckLogin";

const LoginForm = () => {
  const [error, setError] = useState(false);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate();
  const checkLogin = useCheckLogin();

  async function onSubmit(data: FieldValues) {
    const validUser = await checkLogin(data.email, data.password);

    if (validUser) {
      reset();
      navigate("/forecast");
    } else {
      setError(true);
    }
  }

  return (
    <section className={styles.formContainer}>
      <h1>Login</h1>
      {error && <p>User does not exist or email and password is not a match</p>}
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        {errors.email && <p>{String(errors.email.message)}</p>}
        <label htmlFor="emailLogin">Email adress</label>
        <input
          type="email"
          id="emailLogin"
          placeholder="name@email.com"
          {...register("email", {
            required: "Email is required",
          })}
        />
        {errors.password && <p>{String(errors.password.message)}</p>}
        <label htmlFor="passwordLogin">Password</label>
        <input
          type="password"
          id="passwordLogin"
          placeholder="********"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <SubmitButton disabled={isSubmitting}>Register</SubmitButton>
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Signup</NavLink>
      </p>
    </section>
  );
};

const Login = () => {
  const backgroundImg = {
    phone: "/backgrounds/login/phone-login-bg.jpg",
    desktop: "/backgrounds/login/desktop-login-bg.jpg",
  };

  const glassStyles: CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "1rem",
    margin: "2rem",
    width: "90vw",
    minHeight: "90vh",
  };

  return (
    <VisitorLayout background={backgroundImg}>
      <Glass customStyles={glassStyles}>
        <VisitorNavigation />
        <LoginForm />
        <Footer />
      </Glass>
    </VisitorLayout>
  );
};

export default Login;
