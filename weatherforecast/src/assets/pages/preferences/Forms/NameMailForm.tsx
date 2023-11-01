import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import styles from "../Preferences.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../../stores/user";
import { UserType } from "../../../types/UserType";

const NameMailForm = ({ user }: { user: UserType }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSucces, setIsSucces] = useState(false);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm();

  const dispatch = useDispatch();

  async function onSubmit(data: FieldValues) {
    const changedUser: UserType = {
      id: user.id,
      picture: user.picture,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: user.password,
      temperature: user.temperature,
      mode: user.mode,
      cityOne: user.cityOne,
      cityTwo: user.cityTwo,
      cityThree: user.cityThree,
    };

    dispatch(setUser(changedUser));
    reset();

    setIsSucces(true);
    setTimeout(() => {
      setIsCollapsed(true);
    }, 2000);
  }

  const collapseForm = () => {
    if (isCollapsed) {
      setIsSucces(false);
    }
    setIsCollapsed((previousValue) => !previousValue);
  };

  return (
    <article className={`${styles.preferenceFormContainer} nameMailContainer`}>
      <header onClick={collapseForm}>
        <h3>Change email and name?</h3>
        <i>&#9662;</i>
      </header>
      {isSucces && <p>Changes in email and name are saved successful!</p>}
      {!isCollapsed && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            {errors.firstName && <p>{String(errors.firstName.message)}</p>}
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              placeholder={user.firstName}
              {...register("firstName", {
                required: "Firstname is required",
              })}
            />
          </div>
          <div className={styles.inputGroup}>
            {errors.lastName && <p>{String(errors.lastName.message)}</p>}
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              placeholder={user.lastName}
              {...register("lastName", {
                required: "Lastname is required",
              })}
            />
          </div>
          <div className={styles.inputGroup}>
            {errors.email && <p>{String(errors.email.message)}</p>}
            <label htmlFor="emailAdress">Email adress</label>
            <input
              type="email"
              id="emailAdress"
              placeholder={user.email}
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>
          <button disabled={isSubmitting}>Save Changes</button>
        </form>
      )}
    </article>
  );
};

export default NameMailForm;
