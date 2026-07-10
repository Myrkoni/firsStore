
import { createContext, useReducer, useEffect } from "react";


export const CartContext = createContext({
    productId: 0,
    category: '',
    count: 0,
});

function cartReduser(state, action) {
    switch (action.type) {
        case 'add_article': {
            const exists = state.some(
                item => item.productId === action.payload.productId
            );

            if (exists) {
                return state.map(item =>
                    item.productId === action.payload.productId
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }

            return [...state, action.payload];
        }

        case 'increment': {
            return state.map(item =>
                Number(item.productId) === action.payload.productId
                    ? { ...item, count: item.count + 1 }
                    : item
            );
        };
        case 'decrement': {
            return state.map(item =>
                Number(item.productId) === action.payload.productId
                    ? { ...item, count: Math.max(1, item.count - 1) }
                    : item
            );
        };
        case 'delete_article':
            return state.filter(
                item => Number(item.productId) !== action.payload.productId
            );
        default:
            return state;
    }
}


export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(
        cartReduser,
        [],
        () => JSON.parse(localStorage.getItem("cart")) || []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}