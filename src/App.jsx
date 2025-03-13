import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import Sehirler from "./pages/Sehirler";
import SiparisSehirlerSection from "./components/SiparisSehirlerBanner";


function AppContent() {

  return (
    <>
      <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Sehirler" element={<Sehirler />} />

        </Routes>
    </>
  );
}

export default function App() {
  return (
      <AppContent />
  );
}