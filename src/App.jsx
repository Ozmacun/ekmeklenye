import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sehirler from "./pages/Sehirler";
import { Provider } from "react-redux";

function AppContent() {

  return (
    <>
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