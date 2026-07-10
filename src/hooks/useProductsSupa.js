import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase.js";

export function useAllProducts(type, sortProducts) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
            console.log(sortProducts)
                if (sortProducts === 'price-asc') {
                    const { data, error } = await supabase
                        .from(type)
                        .select("*")
                        .order("price", { ascending: true });
                        setProducts(data);

                } else if (sortProducts === 'price-desc') {
                    const { data, error } = await supabase
                        .from(type)
                        .select("*")
                        .order("price", { ascending: false });
                        setProducts(data);

                } else if (sortProducts === 'name-desc') {
                    const { data, error } = await supabase
                        .from(type)
                        .select("*")
                        .order("name", { ascending: false });
                        setProducts(data);

                } else {
                    const { data, error } = await supabase
                        .from(type)
                        .select("*")
                        .order("name", { ascending: true });
                        setProducts(data);
                }

                if (error) {
                    console.error(error);
                    return;
                }
               
            } catch (error) {
                console.error(error);
            }
        }

        loadProducts();
    }, [type, sortProducts]);
    return [products]
}

export function oneProduct(type, productId) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function loadOneProducts() {
            const { data, error } = await supabase
                .from(type)
                .select("*")
                .eq("_id", productId)
                .single();

            if (error) {
                console.error(error);
                return;
            }

            setProduct(data);
        }

        loadOneProducts();
    }, [type, productId]);
    return [product]
}