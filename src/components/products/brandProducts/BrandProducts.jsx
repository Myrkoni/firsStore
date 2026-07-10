// src/pages/BrandProducts/BrandProducts.jsx
import styles from "./BrandProducts.module.css";

import { useGetAllProducts } from "../../../hooks/useProducts";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useLastPath from "../../../hooks/useLastPath";
import { useAllProducts } from "../../../hooks/useProductsSupa";



export default function BrandProducts() {

  const [sortType, setSortType] = useState('')

  const sortHandler = (e) => {
    const value = e.target.value;
    setSortType(value);
  };

  const { category, productName } = useParams()
  const [products, setProducts] = useAllProducts(productName || category, sortType);
  const [currentProducts] = useGetAllProducts(productName);
  const [setPath] = useLastPath()
  const location = useLocation();

  const data = products
  const dataName = productName ? productName : category;

  const isPrice = data[0]?.price

  const titles = {
    phones: "Телефони",
    accessories: "Аксесоари",
    watches: "Часовници",
    apple: "Apple",
    honor: "Honor",
    huawei: "Huawei",
    motorola: "Motorola",
    nokia: "Nokia",
    poco: "Poco",
    samsung: "Samsung",
    xiaomi: "Xiaomi",
    chargers: "Захранвания",
    headphones: "Слушалки",
    phonecases: "Телефонни кейсове",
    powerbanks: "Външни батерии",
    screenprotectors: "Екрани протектори",
    smarthome: "Умен дом",
    cables: "Кабели",

  };


  return (
    <main className={styles.page}>
      {/* HEADER SECTION */}
      <div className={styles.header}>
        {products.brand
          ? <p>Открий всички модели на {data[0]?.brand}</p>
          : <h1>{titles[dataName]}</h1>
        }

      </div>

      {/* FILTER BAR */}
      {isPrice &&
        < div className={styles.filters}>
          <input
            type="text"
            placeholder="Търси модел..."
          />

          <select onChange={sortHandler} value={sortType}>
            <option value="">Сортиране</option>
            <option value="price-asc">Най-евтини</option>
            <option value="price-desc">Най-скъпи</option>
            <option value="name-asc">Име А - Я</option>
            <option value="name-desc">Име Я - А</option>
          </select>
        </div>
      }
      {/* PRODUCTS GRID */}
      <div className={styles.grid}>
        {data.length > 0
          ? (data.map((product) => (
            <div key={product._id} className={styles.card}>
              <img src={product.img} alt={product.name} />

              <h3>{product.name}</h3>

              {product.price && <p className={styles.price}>{product.price} €</p>}

              {product.price
                ? <Link to={
                  productName !== undefined
                    ? `/products/${category}/brand/${productName}/${product._id}`
                    : `/products/${category}/details/${product._id}`
                } className={styles.button} >Виж продукта</Link>
                : <Link to={`/products/${category}/brand/${product.brand}`} state={{ from: location.pathname }} className={styles.button} >Виж продукта</Link>
              }

            </div>)
          ))
          : <h2 className={styles.header}>Няма налични {titles[category]}</h2>
        }
      </div>
    </main >
  );
}