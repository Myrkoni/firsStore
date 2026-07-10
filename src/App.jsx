import { Route, RouterProvider, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import ProductDetails from './components/products/productDetails/ProductDetails'
import Cart from './components/cart/Cart'
import BrandProducts from './components/products/brandProducts/BrandProducts'
import Login from './components/Users/login/Login'
import Register from './components/Users/register/Register'
import ScrollToTop from './utils/scrollToTop'
import { CartProvider } from './contexts/CartContext'
import Profile from './components/Users/profile/Profile'
import Logout from './components/Users/logout/Logout'
import CreateProduct from './components/products/createProduct/CreateProduct'
import EditProduct from './components/products/productEdit/EditProduct'
import { AuthContextProvider } from './contexts/AuthContext'

function App() {


  return (
    <>
      <ScrollToTop />
      <AuthContextProvider>
        <CartProvider>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:category' element={<BrandProducts />} />
            <Route path='/products/:category/brand/:productName' element={<BrandProducts />} />
            <Route path='/products/:category/details/:productId' element={<ProductDetails />} />
            <Route path='/products/:category/brand/:productName/:productId' element={<ProductDetails />} />
            <Route path='/products/create' element={<CreateProduct />} />
            <Route path='/products/:category/:productId/edit' element={<EditProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='profile' element={<Profile />} />
          </Routes>

          <Footer />
        </CartProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
