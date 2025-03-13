import React from "react";
import phone from "../assets/images/phone.webp";
import qr from "../assets/images/qr.jpeg";

function PhoneSection() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl lg:text-4xl font-medium text-black mb-6">
                Mobil uygulamamızı indirin
              </h1>
        <div className="bg-pink-600 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Sol İçerik */}
            <div className="p-8 lg:p-12">
              <p className="text-xl text-white mb-8">
                Yemek ve market ihtiyaçlarının tamamı için hemen indir!
              </p>
              <p className="text-white mb-8">
                Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların
                dakikalar içinde kapında. Yemeksepeti'ni indir, sepetini oluşturup
                siparişini ver, online ya da kapıda dilediğin gibi öde.
              </p>

              <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-8">
                <div className="w-32 h-32 bg-white p-2 rounded-lg flex items-center justify-center">
                  <a href="/" className="w-max">
                    <img
                      src={qr}
                      alt="QR Kod"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a
                    href="#"
                    target="_blank"
                    className="w-full sm:w-40 h-12 bg-black rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white">App Store</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="w-full sm:w-40 h-12 bg-black rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white">Google Play</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="w-full sm:w-40 h-12 bg-black rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white">AppGallery</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sağ İçerik - Telefon Resmi */}
            <div className="p-8 lg:p-12 flex justify-center">
              <img
                src={phone}
                alt="Telefon Ekranı"
                className="w-full max-w-[750px] h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneSection;
