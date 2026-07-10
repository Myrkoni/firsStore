import { useEffect, useState } from "react";
import productsAPI from "../api/products-api";


export function useGetAllProducts(product, sortProducts) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const result = await productsAPI.getAll(product, sortProducts);
                setProducts(result);
            } catch (err) {
                console.error(err);
            }
        };

        loadProducts();
    }, [product, sortProducts]);

    return [products];
}

export function useGetOneProduct(product, productId) {

    const [oneProduct, setOneProduct] = useState({
        name: '',
        desc: '',
        price: '',
        img: '',
    });

    useEffect(() => {
        (async () => {
            const result = await productsAPI.getOne(product, productId);
            setOneProduct(result);
        })();
    }, [productId]);

    return [oneProduct, setOneProduct];
}
