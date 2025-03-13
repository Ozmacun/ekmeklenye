import React from "react";
import { Link } from "react-router-dom";
import guvendamgasi from "../assets/images/guvendamgasi.png";
import qr from "../assets/images/qr.jpeg";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mutfaklar Bölümü */}
        <div className="border-t border-gray-200 pt-10 mt-15">
          <h2 className="text-lg font-bold mb-3">Mutfaklar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 mb-8">
            <Link
              to="/istanbul"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              İstanbul
            </Link>
            <Link
              to="/ankara"
              className="relative text-gray-700 underline decoration-1 transition- duration-1000 hover:decoration-3 underline-offset-4"
            >
              Ankara
            </Link>
            <Link
              to="/izmir"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              İzmir
            </Link>
            <Link
              to="/antalya"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Antalya
            </Link>
            <Link
              to="/burger"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Burger
            </Link>
            <Link
              to="/doner"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Döner
            </Link>
            <Link
              to="/pizza"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Pizza
            </Link>
            <Link
              to="/kebap"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Kebap & Türk Mutfağı
            </Link>
            <Link
              to="/tost"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Tost & Sandviç
            </Link>
            <Link
              to="/tavuk"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Tavuk
            </Link>
            <Link
              to="/pide"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Pide & Lahmacun
            </Link>
            <Link
              to="/tatli"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Tatlı
            </Link>
          </div>
        </div>

        {/* Diğer Şehirler Bölümü */}
        <div className="border-t  border-gray-200 pt-10 mt-15">
          <h2 className="text-lg font-bold mb-3">Diğer Şehirler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 font-medium">
            <Link
              to="/adana"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Adana
            </Link>
            <Link
              to="/adiyaman"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Adıyaman
            </Link>
            <Link
              to="/afyon"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Afyonkarahisar
            </Link>
            <Link
              to="/agri"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Ağrı
            </Link>
            <Link
              to="/amasya"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Amasya
            </Link>
            <Link
              to="/artvin"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Artvin
            </Link>
            <Link
              to="/aydin"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Aydın
            </Link>
            <Link
              to="/balikesir"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Balıkesir
            </Link>
            <Link
              to="/bilecik"
              className="frelative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Bilecik
            </Link>
            <Link
              to="/bingol"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Bingöl
            </Link>
            <Link
              to="/bitlis"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Bitlis
            </Link>
            <Link
              to="/bolu"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Bolu
            </Link>
            <Link
              to="/bursa"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Bursa
            </Link>
            <Link
              to="/canakkale"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Çanakkale
            </Link>
            <Link
              to="/cankiri"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Çankırı
            </Link>
            <Link
              to="/corum"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Çorum
            </Link>
            <Link
              to="/Sehirler"
              className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
            >
              Bütün Şehir ve Bölgeler
            </Link>
          </div>
        </div>

        <div className="flex  justify-center md:justify-end border-t border-gray-200 pt-10 mt-15 ">
          <div className="flex gap-8">
            <Link to="/">
              <img src={guvendamgasi} alt="" className="w-20 pt-9" />
            </Link>
            <Link to="/">
              <img src={qr} alt="" className="w-30" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-10 mt-5 flex flex-col md:flex-row text-gray-600 text-sm justify-between font-medium text-center md:text-left">
          <p className="mt-5 md:mt-5">© EkmeklenYe</p>
          <div className="flex justify-center md:justify-between mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-20">
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Yardım Merkezi
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Kullanım Koşulları
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                S.S.S ve İşlem Rehberi
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Çerez Politikası
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                İletişim
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                İş Ortağımız Olun
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Kurumsal Site
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Aydınlatma Metni
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Kişisel Verilerin Korunması
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Bilgi Toplumu Hizmetleri
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                EkmeklenYe app indir
              </Link>
              <Link
                to="/"
                className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
              >
                Türkiye'deki tüm şehirler
              </Link>
            </div>
          </div>
        </div>
        {/* Sosyal medya linkleri ve ötesi*/}
        <div className="border-t border-gray-200 pt-10 mt-5 text-gray-600 text-sm flex justify-between font-medium md:flex-row flex-col">
          <div className="flex items-center space-x-4 text-gray-700 font-semibold justify-center md:justify-between md:mb-0 mb-5">
          <h1 className="text-2xl font-bold text-pink-600 italic ">EkmeklenYe</h1>
            <span className="border-l border-gray-600 h-9"></span>{" "}
            {/*DikeyÇizgi*/}
            
            <span className="italic text-gray-700 text-xl">Paket Taxi</span>
          </div>

          {/*Medya Linkleri*/}
          <div className="flex space-x-4 justify-center md:justify-between md:mb-0 mb-5">
            <Link
              to="#"
              className="border border-gray-400 rounded-full p-2 duration-300 hover:bg-gray-100 hover:border-gray-600 transition-transform transform hover:scale-110"
            >
              <FaLinkedin className="text-gray-700 text-lg" />
            </Link>
            <Link
              to="#"
              className="border border-gray-400 rounded-full p-2 duration-300 hover:bg-gray-100 hover:border-gray-600 transition-transform transform hover:scale-110"
            >
              <FaInstagram className="text-gray-700 text-lg" />
            </Link>
            <Link
              to="#"
              className="border border-gray-400 rounded-full p-2 duration-300 hover:bg-gray-100 hover:border-gray-600 transition-transform transform hover:scale-110"
            >
              <FaFacebook className="text-gray-700 text-lg" />
            </Link>
            <Link
              to="#"
              className="border border-gray-400 rounded-full p-2 duration-300 hover:bg-gray-100 hover:border-gray-600 transition-transform transform hover:scale-110"
            >
              <FaXTwitter className="text-gray-700 text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
