import { useState, useEffect } from "react";
import useCart from "./useCart";
import cartAPI from "../api/cart-api";
import { supabase } from "../lib/supabase";

export default function useCartProducts() {
    const { cart } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!cart.length) {
            setProducts([]);
            return;
        }

        const fetchProducts = async () => {
            const results = await Promise.all(
                cart.map(async (item, index) => {

                    try {
                        const { data, error } = await supabase
                                        .from(item.category)
                                        .select("*")
                                        .eq("_id", item.productId)
                                        .single();
                        
                        return {
                            ...data,
                            count: item.count,
                        };
                    } catch (e) {
                        console.log("FAILED:", item.productId, e.message);
                        return null;
                    }
                })
            );           

            setProducts(results);
        };

        fetchProducts();
    }, [cart]);

    return products;
}