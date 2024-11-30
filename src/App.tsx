import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/custom/Home';
import Header from './components/custom/Header';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/custom/Footer';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import Wishlist from './pages/Wishlist';
import SearchProductList from './pages/SearchResult';
import AboutPage from './pages/AboutUs';
import ServiceArea from './pages/ServicePage';
import SharpenningService from './pages/SharpeningService';
import DashBoard from './pages/DashBoard';
import ContactPage from './pages/Contact';
import ScheduleMeeting from './pages/ScheduleMeeting';
import { SubMenu } from './components/custom/SubMenu';
import CartPage from './pages/Cart';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SubMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:category" element={<ProductCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
          <Route path="/contact-us" element={<ContactPage />} />
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
