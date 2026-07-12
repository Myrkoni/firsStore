import { Link, useParams } from "react-router-dom";

import styles from "./Header.module.css";

import useCartProducts from "../../hooks/useCartProdunts";
import { useAuthContext } from "../../contexts/AuthContext";
import { useAllProducts } from "../../hooks/useProductsSupa";

export default function Header() {

  const [phones] = useAllProducts("phones");
  const [accessories] = useAllProducts("accessories");
  const [watches] = useAllProducts("watches");
  const product = useCartProducts();
  const { fullName, isAuthenticated } = useAuthContext();

  let total = product.reduce((sum, item) => sum + item.price * item.count, 0);

  const lowPrice = total < 500;
  const delivery = 5.89;

  if (lowPrice && product.length > 0) {
    total = Number(total) + Number(delivery);
  }

  return (
    <header className={styles.header}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Link to="/">
          <span>Mobile</span>Zone
        </Link>
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        <Link to="/">Начало</Link>

        <div className={styles.dropdown}>
          <Link to="/products/phones" className={styles.dropBtn}>
            Телефони
          </Link>
          <div className={styles.menu}>
            {phones.length > 0 ? (
              phones.map((phone) => (
                <Link
                  to={`/products/phones/brand/${phone.brand}`}
                  key={phone._id}
                >
                  {phone.name}
                </Link>
              ))
            ) : (
              <p style={{ color: "white" }}>Няма налични продукти</p>
            )}
          </div>
        </div>

        <div className={styles.dropdown}>
          <Link to="/products/watches" className={styles.dropBtn}>
            Часовници
          </Link>
          {/* <div className={styles.menu}>
            {watches.length > 0
              ? watches.map(watche => <Link to={`/products/watches/${watche.brand}`} key={watche._id}>{watche.name}</Link>)
              : <p style={{ color: "white" }}>Няма налични продукти</p>
            }
          </div> */}
        </div>

        <div className={styles.dropdown}>
          <Link to="/products/accessories" className={styles.dropBtn}>
            Аксесоари
          </Link>
          <div className={styles.menu}>
            {accessories.length > 0 ? (
              accessories.map((accessor) => (
                <Link
                  to={`/products/accessories/brand/${accessor.brand}`}
                  key={accessor._id}
                >
                  {accessor.name}
                </Link>
              ))
            ) : (
              <p style={{ color: "white" }}>Няма налични продукти</p>
            )}
          </div>
        </div>

        {fullName === "Admin" && (
          <Link to="/products/create">Добави продукт</Link>
        )}
      </nav>

      {/* RIGHT */}
      <div className={styles.right}>
        {/* CART */}
        <div className={styles.cart}>
          <button className={styles.iconBtn}>
            <Link to="/cart">🛒</Link>
          </button>

          <div className={styles.cartInfo}>
            <span className={styles.badge}>{product.length}</span>
            <span className={styles.total}>{total} €</span>
          </div>
        </div>

        {!isAuthenticated ? (
          <>
            <Link to="/login" className={styles.loginBtn}>
              Вход
            </Link>
            <Link to="/register" className={styles.registerBtn}>
              Регистрация
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile" className={styles.profileBtn}>
              Профил
            </Link>
            <Link to="/logout" className={styles.logoutBtn}>
              Изход
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
