import React from "react";
import { Link } from "react-router-dom";

const SiparisSehirlerDetay = () => {
  return (
    
        <div className="max-w-6xl mx-auto px-6">
                {/* Mutfaklar Bölümü */}
                <div className="border-t border-gray-200 pt-10 mt-15">
                  <h2 className="text-3xl font-light mb-5">Türkiye'de En Çok Yemek Siparişi Verilen 12 Şehir</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 mb-8">
                    <Link
                      to="/adana"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Adana
                    </Link>
                    <Link
                      to="/ankara"
                      className="relative text-gray-700 underline decoration-1 transition- duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Ankara
                    </Link>
                    <Link
                      to="/antalya"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Antalya
                    </Link>
                    <Link
                      to="/aydin"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Aydın
                    </Link>
                    <Link
                      to="/bursa"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Bursa
                    </Link>
                    <Link
                      to="/denizli"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Denizli
                    </Link>
                    <Link
                      to="/eskisehir"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Eskisehir
                    </Link>
                    <Link
                      to="/istanbul"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      İstanbul
                    </Link>
                    <Link
                      to="/izmir"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      İzmir
                    </Link>
                    <Link
                      to="/kocaeli"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Kocaeli
                    </Link>
                    <Link
                      to="/konya"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Konya
                    </Link>
                    <Link
                      to="/mersin"
                      className="relative text-gray-700 underline decoration-1 transition-all duration-1000 hover:decoration-3 underline-offset-4"
                    >
                      Mersin
                    </Link>
                    
                  </div>
                </div>
        
                {/* Diğer Şehirler Bölümü */}
                <div className="border-t border-gray-200 pt-10 mt-15">
                  <h2 className="text-3xl font-light mb-5">Türkiye'de Online Yemek Siparişi Verebileceğiniz Şehirler</h2>
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
                    
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-10 mt-15">
                    <span className="text-gray-400 font-light">Türkiye'nin neresinde olursanız olun, lezzet dolu bir deneyim sadece bir tık uzağınızda. Şimdi, hangi şehirde olduğunuzu seçip şehrinizdeki en popüler restoranlardan hemen online yemek siparişi verin. Açlığınızı gidermek Yemek Sepeti ile çok daha kolay ve hızlı. Yemek Sepeti ile her şehirde damak tadınıza uygun seçenekleri keşfedin ve yemek keyfini doya doya yaşayın!</span>
                </div>
        
                </div>
  );
};
export default SiparisSehirlerDetay;
