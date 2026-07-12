import { useState } from "react";
import styles from "./Register.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";


const initialValues = { email: '', password: '', 'confirm-password': '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            return setError('Password missmatch!');
        }

        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <main className={styles.page}>
            <div className={styles.card}>
                {/* LEFT VISUAL */}
                <div className={styles.left}>
                    <h1>Създай акаунт 🚀</h1>
                    <p>
                        Регистрирай се, за да получаваш оферти,
                        да правиш поръчки и да следиш доставките си.
                    </p>
                </div>

                {/* FORM */}
                <div className={styles.right}>
                    <h2>Регистрация</h2>

                    <input
                        type="email"
                        placeholder="Имейл"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        placeholder="Парола"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        placeholder="Повтори паролата"
                        name="confirm-password"
                        id="confirm-password"
                        value={values['confirm-password']}
                        onChange={changeHandler}
                    />

                    <button onClick={submitHandler}>Създай акаунт</button>

                    <div className={styles.links}>
                        <Link to="/login">Имаш акаунт? Вход</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}