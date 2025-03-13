import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Header = () => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("TR");

  return (
    <header className="bg-white  py-3 flex justify-between items-center max-w-6xl mx-auto px-6">
      {/*Desktop */}
      <div className="hidden md:flex justify-between items-center w-full">
        {/* Sol Kısım: Logo */}
        <Link to={HomePage}><h1 className="text-3xl font-bold text-pink-600 italic cursor-pointer">EkmeklenYe</h1></Link>
        

        {/* Sağ Kısım: Giriş Yap, Kayıt Ol, Dil Seçimi ve Sepet */}
        <div className="flex items-center space-x-4">
          {/* Giriş Yap Butonu */}
          <button className="border border-gray-500 text-gray-700 px-4 py-1 rounded-md transition-transform transform hover:scale-105 cursor-pointer">
            Giriş Yap
          </button>

          {/* Kayıt Ol Butonu */}
          <button className="bg-pink-600 text-white px-4 py-1 rounded-md transition-transform transform hover:scale-105 cursor-pointer">
            Kayıt Ol
          </button>

          {/* Dil Seçimi */}
          <div className="relative">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center space-x-1 px-3 py-1 rounded-md transition-transform transform hover:scale-105 cursor-pointer"
            >
              <span className="text-gray-700">{selectedLanguage}</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-pink-600" />
            </button>

            {/* Dropdown Menü */}
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
          <FontAwesomeIcon
            icon={faShoppingBasket}
            className="text-gray-600 text-xl cursor-pointer transition-transform transform hover:scale-105"
          />
        </div>
      </div>

      {/* Mobil */}
      <div className="flex md:hidden justify-between items-center w-full">
        {/* Sol: Kullanıcı İkonu */}
        <FontAwesomeIcon
          icon={faUser}
          className="text-gray-600 text-xl cursor-pointer"
        />

        {/* Orta: Logo */}
        <h1 className="text-2xl font-bold text-pink-600 italic">Ekmeklenye</h1>

        {/* Sağ: Sepet İkonu */}
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className="text-gray-600 text-xl cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
