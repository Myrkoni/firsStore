import { useAuthContext } from "../../../contexts/authContext";
import styles from "./Profile.module.css";


export default function Profile() {

  const { fullName, email } = useAuthContext();



  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.userBox}>
            <div className={styles.avatar}>{fullName[0]}</div>
            <h3>{fullName}</h3>
            <p>{email}</p>
          </div>

          <nav className={styles.menu}>
            <button>📦 Поръчки</button>
            <button>❤️ Любими</button>
            <button>🏠 Адреси</button>
            <button>⚙️ Настройки</button>
            <button className={styles.logout}>🚪 Изход</button>
          </nav>
        </aside>

        {/* CONTENT */}
        <section className={styles.content}>
          <h1>Поръчки</h1>

          <div className={styles.orders}>
            <div className={styles.orderCard}>
              <h3>iPhone 15 Pro Max</h3>
              <p>Статус: Доставена</p>
              <span>2699 лв.</span>
            </div>

            <div className={styles.orderCard}>
              <h3>Samsung Galaxy Buds</h3>
              <p>Статус: В процес</p>
              <span>299 лв.</span>
            </div>

            <div className={styles.orderCard}>
              <h3>Apple Watch Series 9</h3>
              <p>Статус: Изпратена</p>
              <span>999 лв.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}