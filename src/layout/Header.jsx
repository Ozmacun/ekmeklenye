import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faChevronDown,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Header = () => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("TR");

  return (
    <header className="bg-white py-3 fixed top-0 left-0 right-0 z-50 shadow-gray-100 shadow-md">
      {/*Desktop */}
      <div className="hidden md:flex justify-between items-center w-full max-w-6xl mx-auto px-6">
        {/* Sol Kısımdaki Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-pink-600 italic cursor-pointer">
            EkmeklenYe
          </h1>
        </Link>

        {/* Sağ Kısımdaki Giriş Yap, Kayıt Ol, Dil Seçimi ve Sepet */}
        <div className="flex items-center space-x-4">
          {/* Giriş Yap Butonu */}
          <Link to="/giris">
            <button className="border border-gray-500 text-gray-700 px-3 py-0.5 text-sm rounded-md transition-transform transform hover:scale-105 cursor-pointer">
              Giriş Yap
            </button>
          </Link>

          {/* Kayıt Ol Butonu */}
          <Link to="/kayit">
            <button className="bg-pink-600 text-white px-3 py-0.5 text-sm rounded-md transition-transform transform hover:scale-105 cursor-pointer">
              Kayıt Ol
              
            </button>
          </Link>

          {/* Dil Seçimi */}
          <div className="relative">
          
            <button
            
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center space-x-1 px-1 py-1 rounded-md transition-transform transform hover:scale-105 cursor-pointer hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faGlobe} />
              <span className="text-gray-700">{selectedLanguage}</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-pink-600" />
            </button>

            {/*Dropdown*/}
            {languageMenuOpen && (
              <ul className="absolute right-0 mt-1 bg-white border border-gray-300 shadow-md rounded-md">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage("TR");
                    setLanguageMenuOpen(false);
                  }}
                >
                  Türkçe
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage("EN");
                    setLanguageMenuOpen(false);
                  }}
                >
                  English
                </li>
              </ul>
            )}
          </div>

          {/* Sepet İkonu */}
          <Link to="/sepet">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className="text-gray-600 text-xl cursor-pointer transition-transform transform hover:scale-105"
            />
          </Link>
        </div>
      </div>

      {/* Mobil */}
      <div className="flex md:hidden justify-between items-center w-full">
        {/* Soldaki Kullanıcı İkonu */}
        <FontAwesomeIcon
          icon={faUser}
          className="text-gray-600 text-xl cursor-pointer"
        />

        {/* Ortadaki Logo */}
        <h1 className="text-2xl font-bold text-pink-600 italic">EkmeklenYe</h1>

        {/* Sağdaki Sepet İkonu */}
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className="text-gray-600 text-xl cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
