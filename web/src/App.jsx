import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import siteConfig from "./config/siteConfig";
import AdminPage from "./pages/AdminPage";
import AccountPage from "./pages/AccountPage";
import ApplicationPage from "./pages/ApplicationPage";
import CheckoutCancelPage from "./pages/CheckoutCancelPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import FemaleDetailPage from "./pages/FemaleDetailPage";
import FemalesPage from "./pages/FemalesPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import LitterDetailPage from "./pages/LitterDetailPage";
import LittersPage from "./pages/LittersPage";
import MerchPage from "./pages/MerchPage";
import ProgramPage from "./pages/ProgramPage";
import PuppiesPage from "./pages/PuppiesPage";
import PuppyDetailPage from "./pages/PuppyDetailPage";
import StackOffPage from "./pages/StackOffPage";
import StudDetailPage from "./pages/StudDetailPage";
import StudsPage from "./pages/StudsPage";
import GeneticsPage from "./pages/GeneticsPage";
import { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary", siteConfig.primaryColor);
    root.style.setProperty("--secondary", siteConfig.secondaryColor);
    root.style.setProperty("--accent", siteConfig.accentColor);
    root.style.setProperty("--bg-gradient", siteConfig.backgroundGradient);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/litters" element={<LittersPage />} />
          <Route path="/litters/:id" element={<LitterDetailPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/studs" element={<StudsPage />} />
          <Route path="/studs/:id" element={<StudDetailPage />} />
          <Route path="/females" element={<FemalesPage />} />
          <Route path="/females/:id" element={<FemaleDetailPage />} />
          <Route path="/puppies" element={<PuppiesPage />} />
          <Route path="/puppies/:id" element={<PuppyDetailPage />} />
          <Route path="/stack-off" element={<StackOffPage />} />
          <Route path="/genetics" element={<GeneticsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplicationPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
          <Route path="/checkout/cancel" element={<CheckoutCancelPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
