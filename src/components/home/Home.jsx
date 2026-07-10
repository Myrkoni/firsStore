// src/pages/Home/Home.jsx

import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {



  return (
    <main className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>#1 Mobile Store</span>

          <h1>
            Най-новите <span>смартфони</span> и аксесоари
          </h1>

          <p>
            Открий premium устройства, модерни аксесоари и
            най-добрите tech предложения на едно място.
          </p>

          <div className={styles.heroButtons}>
            <Link to='/products/phones' className={styles.primaryBtn}>
              Разгледай телефони
            </Link>

            <Link to='/products/accessories' className={styles.secondaryBtn}>
              Аксесоари
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Phone"
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className={styles.categories}>
        <h2>Категории</h2>

        <div className={styles.categoryGrid}>
          <Link to='/products/phones' className={styles.link}>
            <div className={styles.card}>
              <h3>📱 Смартфони</h3>
              <p>iPhone, Samsung, Xiaomi и още.</p>
            </div>
          </Link>

          <Link to='/products/headphones' className={styles.link}>
            <div className={styles.card}>
              <h3>🎧 Слушалки</h3>
              <p>Безжични и gaming модели.</p>
            </div>
          </Link>

          <Link to='/products/chargers' className={styles.link}>
            <div className={styles.card}>
              <h3>🔌 Зарядни</h3>
              <p>Fast charge и wireless chargers.</p>
            </div>
          </Link>

          <Link to='/products/watches' className={styles.link}>
            <div className={styles.card}>
              <h3>⌚ Смарт часовници</h3>
              <p>Модерни wearable устройства.</p>
            </div>
          </Link>
        </div>
      </section>
    </main >
  );
}