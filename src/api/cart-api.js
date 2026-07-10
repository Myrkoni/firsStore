import * as request from "./requester"

const BASE_URL = 'http://localhost:3030/data';

export const getAllProductsInCart = async (category, productId) => {
    try {

        const result = await request.get(`${BASE_URL}/${category}/${productId}`);
        return result
    } catch (err) {
        console.log(err.message);
        throw err
    }
}

const cartAPI = {
    getAllProductsInCart,
}

export default cartAPI;