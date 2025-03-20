import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import WeddingPlannerWebsite from './components/WeddingPlanner/WeddingPlannerWebsite';
import AuthPage from './pages/AuthPage/AuthPage';
import UserProfile from './components/UserProfile/UserProfile';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductForm from './components/ProductForm/ProductForm';
import VerifyOtp from './pages/AuthPage/VerifyOtp';
import Services from './pages/Services/Services';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import FAQSection from './components/FAQSection/FAQSection';
import Account from './pages/Account/Account';
import Events from './pages/AshokaEvents/Events';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<WeddingPlannerWebsite />} />
          <Route path="/home" element={<WeddingPlannerWebsite />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/authUser" element={<AuthPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/account' element={<Account />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
