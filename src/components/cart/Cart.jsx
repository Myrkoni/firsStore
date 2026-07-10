// src/pages/Cart/Cart.jsx

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import useCart from "../../hooks/useCart";
import useCartProducts from "../../hooks/useCartProdunts";
import styles from "./Cart.module.css";

export default function Cart() {

  const product = useCartProducts()
  const navigate = useNavigate()
  const { cart, dispatch } = useCart();
  const { isAuthenticated } = useAuthContext();

  let total = product.reduce((sum, item) => sum + (item.price * item.count), 0);

  const lowPrice = total < 500;
  const delivery = product.length > 0 ? 5.89 : 0;

  if (lowPrice && product.length > 0) {
    total = Number(total) + Number(delivery)
  }

  return (
    <main className={styles.cartPage}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.cartItems}>
          <h1>Количка</h1>
          {product.length > 0
            ? (product.map((item) => (
              <div className={styles.cartCard} key={item._id}>
                <img src={item.img} alt={item.name} />

                <div className={styles.info}>
                  <h3>{item.name}</h3>
                  <p>{item.price} €</p>
                </div>

                <div className={styles.quantity}>
                  <button onClick={() => dispatch({ type: 'decrement', payload: { productId: item._id } })}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => dispatch({ type: 'increment', payload: { productId: item._id } })}>+</button>
                </div>

                <button className={styles.removeBtn} onClick={() => dispatch({ type: 'delete_article', payload: { productId: item._id } })}>
                  ✕
                </button>
              </div>
            )))
            : <h2>Няма добавени продукти!</h2>
          }
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.summary}>
          <h2>Обобщение</h2>

          <div className={styles.summaryRow}>
            <span>Продукти</span>
            <span>{cart.length}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Доставка</span>
            <span>{lowPrice
              ? `${delivery} €`
              : "Безплатна"
            } </span>
          </div>

          <div className={styles.total}>
            <span>Общо:</span>
            <span>{total} €</span>
          </div>


          {isAuthenticated
            ? <button className={styles.checkoutBtn}>Завърши поръчка</button>
            : <button className={styles.checkoutBtn} onClick={() => navigate('/login')}>Вход</button>
          }
        </div>
      </div>
    </main>
  );
}