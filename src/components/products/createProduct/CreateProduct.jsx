import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import styles from "./CreateProduct.module.css";

const initialValues = {}

export default function CreateProduct() {

    const createHandler = () => { }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

    return (
        <main className={styles.page}>
            <div className={styles.card}>
                <div className={styles.right}>
                    <h2>Добавяне на продукт</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Име на продукта"
                        value={values.name}
                        onChange={changeHandler}
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Цена"
                        value={values.price}
                        onChange={changeHandler}
                    />

                    <select
                        name="productsType"
                        value={values.productsType}
                        onChange={changeHandler}
                    >
                        <option value="">Избери категория</option>
                        <option value="phones">Телефони</option>
                        <option value="watches">Часовници</option>
                        <option value="accessories">Аксесоари</option>
                    </select>

                    {values.productsType && (
                        <select
                            name="brand"
                            value={values.brand }
                            onChange={changeHandler}
                        >
                            <option value="">Избери марка</option>

                            {/* {brands[values.productsType].map(brand => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))} */}
                        </select>
                    )}

                    {values.brand === 'Друга марка' && (
                        <input
                            type="text"
                            name="customBrand"
                            placeholder="Въведи марка"
                            value={values.customBrand}
                            onChange={changeHandler}
                        />
                    )}

                    <textarea
                        name="desc"
                        placeholder="Описание"
                        value={values.desc }
                        onChange={changeHandler}
                    />

                    <input
                        type="text"
                        name="img"
                        placeholder="URL на снимка"
                        value={values.img }
                        onChange={changeHandler}
                    />

                    <button onClick={submitHandler}>
                        Добави продукт
                    </button>
                </div>
            </div>
        </main>
    )
}