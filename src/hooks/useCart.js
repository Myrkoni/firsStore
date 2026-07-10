

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export default function useCart() {
    return useContext(CartContext);
}


// export default function useCart() {

//     const [cart, dispatch] = useReducer(cartReduser, [], () => JSON.parse(localStorage.getItem("cart")) || []);

//     const saved = localStorage.getItem("cart")

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);

//     return [cart, dispatch]
// }