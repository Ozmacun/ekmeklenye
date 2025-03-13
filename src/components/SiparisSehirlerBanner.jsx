import React from "react";
import { Link } from "react-router-dom";

const SiparisSehirlerBanner = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={"https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt="Son aksam yemegi"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-600/80">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center font-normal text-white text-xl px-4 md:text-3xl lg:text-4xl sm:text-2xl">
            TÜRKİYE'DE ONLİNE YEMEK SİPARİŞİ VEREBİLECEĞİNİZ TÜM ŞEHİRLER
          </h1>
        </div>
      </div>
    </section>
  );
};
export default SiparisSehirlerBanner;
