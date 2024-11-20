import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/custom/Home';
import Header from './components/custom/Header';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/custom/Footer';
import Cart from './pages/Cart';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Register';
import Wishlist from './pages/Wishlist';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:category" element={<ProductCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
