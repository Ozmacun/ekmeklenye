import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

function AppContent() {

  return (
    <>
      <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  );
}

export default function App() {
  return (
      <AppContent />
  );
}