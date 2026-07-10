import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useGetOneProduct } from "../../../hooks/useProducts";
import useCart from "../../../hooks/useCart";
import { useAuthContext } from "../../../contexts/authContext";
import productsAPI from "../../../api/products-api";
import { oneProduct } from "../../../hooks/useProductsSupa";

export default function ProductDetails() {

    const navigate = useNavigate()
    const { category, productName, productId } = useParams();
    const titel = productName ? productName : category;
    const { cart, dispatch } = useCart();
    // const [product, setProduct] = useGetOneProduct(titel, productId)
    const [product] = oneProduct(titel, productId)
    const { fullName, isAuthenticated } = useAuthContext()
    const location = useLocation();

    const addCartClickHandler = () => {
        const result = {
            productId: productId,
            category: titel,
            count: 1,
        }

        dispatch({ type: 'add_article', payload: result })
    }

    const addCartAndNavigate = () => {
        addCartClickHandler(),
            navigate('/cart')
    }

    const productDeleteHandler = () => {

        const isConfirmed = confirm(`Сигурни ли сте, че искате да изтриете този продукт ${product.name} ?`);

        if (!isConfirmed) {
            return
        }
        try {
            productsAPI.remove(titel, productId);

            navigate(location.state?.from);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                {/* IMAGE */}
                <div className={styles.imageBox}>
                    <img
                        src={product.img}
                        alt={product.name}
                    />
                </div>

                {/* INFO */}
                <div className={styles.info}>
                    <h1>{product.name}</h1>

                    <p className={styles.price}>{product.price} €</p>

                    <p className={styles.desc}>{product.desc}</p>

                    {/* SPECS */}
                    {/* <div className={styles.specs}>
            <div><span>Дисплей:</span> 6.8" AMOLED</div>
            <div><span>Процесор:</span> Snapdragon 8 Gen 3</div>
            <div><span>Камера:</span> 200MP</div>
            <div><span>Батерия:</span> 5000 mAh</div>
          </div> */}

                    {/* ACTIONS */}
                    <div className={styles.actions}>
                        <button className={styles.add} onClick={addCartClickHandler}>Добави в количка</button>
                        <button className={styles.buy} onClick={addCartAndNavigate}>Купи сега</button>
                    </div>
                    {fullName === "Admin" &&
                        <div className={styles.actions}>
                            <button className={styles.edit} onClick={() => navigate(`/products/${titel}/${productId}/edit`)} state={location.state}>Редактиране</button>
                            <button className={styles.delete} onClick={productDeleteHandler}>Изтриване</button>
                        </div>
                    }
                </div>
            </div>
        </main >
    );
}