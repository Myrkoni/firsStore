import * as request from "./requester"

const BASE_URL = 'http://localhost:3030/data';

// export const getAll = async (product, sortProducts) => {
//     try {
//         let urlSearchParams = ''

//         if (sortProducts === 'price-asc') {
//             urlSearchParams = new URLSearchParams({
//                 sortBy: 'price',
//             })
//         } else if (sortProducts === 'price-desc') {
//             urlSearchParams = new URLSearchParams({
//                 sortBy: 'price desc',
//             })
//         } else if (sortProducts === 'name-desc') {
//             urlSearchParams = new URLSearchParams({
//                 sortBy: 'name desc',
//             })
//         } else {
//             urlSearchParams = new URLSearchParams({
//                 sortBy: 'name',
//             })
//         }

//         const result = await request.get(`${BASE_URL}/${product}?${urlSearchParams.toString()}`);
//         const products = Object.values(result);
//         return products;
//     } catch (err) {
//         console.log(err.message);
//         throw err
//     }
// }

export const getOne = (product, productId) => request.get(`${BASE_URL}/${product}/${productId}`);

export const update = (product, productId, data) => request.put(`${BASE_URL}/${product}/${productId}`, data);

export const remove = (product, productId) => request.del(`${BASE_URL}/${product}/${productId}`);

const productsAPI = {
    // getAll,
    getOne,
    update,
    remove,
}

export default productsAPI;