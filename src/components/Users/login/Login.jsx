import styles from "./Login.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import useCart from "../../../hooks/useCart";


const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate()
    const { cart } = useCart();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            if (cart.length > 0) {
                navigate('/cart')
            } else {
                navigate('/');
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler);


    return (
        <main className={styles.page}>
            <div className={styles.card}>
                {/* LEFT VISUAL */}
                <div className={styles.left}>
                    <h1>Добре дошъл 👋</h1>
                    <p>
                        Влез в профила си, за да поръчваш телефони,
                        аксесоари и да следиш поръчките си.
                    </p>
                </div>

                {/* FORM */}
                <div className={styles.right} >
                    <h2>Вход</h2>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Имейл"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Парола"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <button onClick={submitHandler}>Вход</button>

                    <div className={styles.links}>
                        <a href="#">Забравена парола?</a>
                        <Link to="/register">Създай акаунт</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}