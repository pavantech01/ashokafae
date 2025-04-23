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
import TopButton from './components/TopButton/TopButton';

import WeddingEvent from './pages/NavPages/wedding-event';
import EngagementEvent from './pages/NavPages/engagement-event';
import AnniversaryCeremony from './pages/NavPages/anniversary-ceremony';
import BirthdayParty from './pages/NavPages/birthday-party';
import BabyShower from './pages/NavPages/baby-shower';
import HaldiDecor from './pages/NavPages/haldi-decor';
import MehndiCeremony from './pages/NavPages/mehndi-ceremony';
import ReceptionStage from './pages/NavPages/reception-stage';
import EntranceGate from './pages/NavPages/entrance-gate';
import VidhiMandap from './pages/NavPages/vidhi-mandap';
import SpecialEntry from './pages/NavPages/special-entry';
import PhotoBooth from './pages/NavPages/photo-booth';
import EventView from './pages/NavPages/event-view';
import AdminAuthPage from './pages/NavPages/Admin/AdminMain/AdminAuthPage';
import AddServiceForm from './pages/NavPages/Admin/AddService/AddServiceForm';
import AddEventForm from './pages/NavPages/Admin/AddEvent/AddEventForm';

function App() {
  return (
    
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <TopButton />
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
          <Route path="/our-services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/account' element={<Account />} />
          <Route path="/faq" element={<FAQSection />} />
          {/* DropDown */}
          <Route path="/events/wedding-event" element={<WeddingEvent />} />
          <Route path="/events/engagement-event" element={<EngagementEvent />} />
          <Route path="/events/anniversary-ceremony" element={<AnniversaryCeremony />} />
          <Route path="/events/birthday-party" element={<BirthdayParty />} />
          <Route path="/events/baby-shower" element={<BabyShower />} />
          <Route path="/events/haldi-decoar" element={<HaldiDecor />} />
          <Route path="/events/mehndi-ceremony" element={<MehndiCeremony />} />
          <Route path="/events/reception-stage" element={<ReceptionStage />} />
          <Route path="/events/entrance-gate" element={<EntranceGate />} />
          <Route path="/events/vidhi-mandap" element={<VidhiMandap />} />
          <Route path="/events/special-entry" element={<SpecialEntry />} />
          <Route path="/events/photo-booth" element={<PhotoBooth />} />
          <Route path="/events/event/:id" element={<EventView />} /> {/* New route for event view */}
          <Route path="/admin-auth-page" element={<AdminAuthPage />} />
          <Route path="/add-service" element={<AddServiceForm />} />
          <Route path="/add-event" element={<AddEventForm />} />
          {/* Notfound */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
