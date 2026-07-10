import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import styles from "./EditProduct.module.css";
import { useGetOneProduct } from "../../../hooks/useProducts";
import productsAPI from "../../../api/products-api";


export default function EditProduct() {

    const navigate = useNavigate();
    const { category, productId } = useParams();
    const [oneProduct, setOneProduct] = useGetOneProduct(category, productId);
    const data = useParams()

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(oneProduct, async (values) => {
        const isConfirmed = confirm('Сигурни ли сте, че искате да прометите този продукт?');

        if (isConfirmed) {
            await productsAPI.update(category, productId, values);

            navigate(`/products/${category}/details/${productId}`);
        }

    });

    return (
        <main className={styles.page}>
            <div className={styles.card}>
                <div className={styles.right}>
                    <h2>Редактиране на продукт</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Име на продукта"
                        onChange={changeHandler}
                        value={values.name}
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Цена"
                        onChange={changeHandler}
                        value={values.price}
                    />

                    <imput
                        type="text"
                        name="productsType"
                        onChange={changeHandler}
                        value={values.productsType}

                    />

                    <imput
                        type="text"
                        name="brand"
                        onChange={changeHandler}
                        value={values.brand}
                    />

                    <textarea
                        name="desc"
                        placeholder="Описание"
                        onChange={changeHandler}
                        value={values.desc}
                    />

                    <input
                        type="text"
                        name="img"
                        placeholder="URL на снимка"
                        onChange={changeHandler}
                        value={values.img}
                    />

                    <button onClick={submitHandler}>
                        Редактиране продукт
                    </button>
                </div>
            </div>
        </main>
    )
}