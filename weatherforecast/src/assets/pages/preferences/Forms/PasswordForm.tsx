import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import styles from "../Preferences.module.css";
import { setUser } from "../../../stores/user";
import { UserType } from "../../../types/UserType";

const PasswordForm = ({ user }: { user: UserType }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isSucces, setIsSucces] = useState(false);

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        watch,
        reset,
    } = useForm();

    const dispatch = useDispatch();

    async function onSubmit(data: FieldValues) {
        const changedUser: UserType = {
            id: user.id,
            picture: user.picture,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: data.newPassword,
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
        <article className={`${styles.preferenceFormContainer} passwordContainer`}>
            <header onClick={collapseForm}>
                <h3>Change password?</h3>
                <button><i>&#9662;</i></button>
            </header>
            {isSucces && <p>Changing password succeeded!</p>}
            {!isCollapsed && (
                <form role="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputGroup}>
                        {errors.oldPassword && <p>{String(errors.oldPassword.message)}</p>}
                        <label htmlFor="oldPassword">Old password</label>
                        <input
                            type="password"
                            id="oldPassword"
                            placeholder="********"
                            {...register("oldPassword", {
                              required: "Old password is required",
                              validate: (value) =>
                                value === user.password || "Old password is wrong",
                            })}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        {errors.newPassword && <p>{String(errors.newPassword.message)}</p>}
                        <label htmlFor="newPassword">New password</label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="********"
                            {...register("newPassword", {
                                required: "New password is required",
                                minLength: {
                                    value: 6,
                                    message: "New password must have at least 6 characters",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z]).{6,}$/,
                                    message:
                                        "New password must contain at least one uppercase letter",
                                },
                                validate: (value) =>
                                value !== watch("oldPassword") ||
                                "New password must be different",
                            })}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        {errors.confirmPassword && (
                            <p>{String(errors.confirmPassword.message)}</p>
                        )}
                        <label htmlFor="confirmPassword">Confirm new password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="********"
                            {...register("confirmPassword", {
                                required: "Password confirmation is required",
                                validate: (value) =>
                                    value === watch("newPassword") || "Passwords do not match",
                            })}
                        />
                    </div>
                    <button disabled={isSubmitting}>Save Password</button>
                </form>
            )}
        </article>
    );
};

export default PasswordForm;