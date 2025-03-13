import React from 'react';
import { Search } from 'lucide-react';
import kebab from '../assets/images/kebab.webp';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={kebab}
        alt="Kebap"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/50">
        <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-normal text-gray-800 mb-8 max-w-[600px]">
            Yemek ya da market, tüm ihtiyaçların kapında!
          </h1>
          
          <div className="flex flex-col md:flex-row gap-2 max-w-[600px]">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Adresini Belirle veya Seç"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-black-500 focus:outline-none focus:border-[#e80370] focus:ring-1 focus:ring-[#e80370]"
              />
            </div>
            <button className="bg-pink-600 text-white px-4 py-1 rounded-md transition-transform transform hover:scale-105 cursor-pointer">
              Konumumu bul
            </button>
            <button className="bg-pink-600 text-white px-4 py-1 rounded-md transition-transform transform hover:scale-105 cursor-pointer">
              Keşfet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;