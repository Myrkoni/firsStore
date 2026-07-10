import { Link } from "react-router-dom"

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <h2>
            <Link to='/'>
              <span>Mobile</span>Zone
            </Link >
          </h2>

          <p>
            Модерен tech магазин за смартфони,
            аксесоари и smart устройства.
          </p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <h3>Навигация</h3>

          <Link to='/'>Начало</Link>
          <Link to='/products/phones'>Телефони</Link>
          <Link to="/products/accessories">Аксесоари</Link>
          <Link to="/">Промоции</Link>
        </div>

        {/* Support */}
        <div className={styles.links}>
          <h3>Поддръжка</h3>

          <a href="#">Контакти</a>
          <a href="#">Доставка</a>
          <a href="#">Гаранция</a>
          <a href="#">Политика</a>
        </div>

        {/* Socials */}
        <div className={styles.links}>
          <h3>Социални мрежи</h3>

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 MobileZone. Всички права запазени.</p>
      </div>
    </footer>
  );
}