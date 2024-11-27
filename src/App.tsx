import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/custom/Home';
import Header from './components/custom/Header';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/custom/Footer';
import Cart from './pages/Cart';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import Wishlist from './pages/Wishlist';
import SearchProductList from './pages/SearchResult';
import AboutPage from './pages/AboutUs';
import ServiceArea from './pages/ServicePage';
import SharpenningService from './pages/SharpeningService';

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
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/sharpening-service" element={<SharpenningService />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/service" element={<ServiceArea />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search-result/:term" element={<SearchProductList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
