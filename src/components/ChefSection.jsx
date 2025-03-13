import React from 'react';
import chef from '../assets/images/chef.webp';

const ChefSection = () => {
  return (
    <section className="relative pb-60 md:pb-40">
      {/* Title section is only gonna be visible on desktop!!! */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-3xl md:text-4xl font-normal">
          Restoran veya Mahalle esnafı iş ortağımız olun
        </h2>
      </div>

      <div className="relative">
        <img
          src={chef}
          alt="Chef preparing food"
          className="w-full h-[500px] md:h-[450px] object-cover"
        />

        <div className="bg-white absolute 
          w-[90%] md:w-[600px] 
          left-1/2 -translate-x-1/2 md:left-1/3 md:-translate-x-1/2
          top-[60%] md:top-[60%]
          rounded-2xl p-8 md:p-10
          shadow-lg
          flex flex-col gap-4">
          
          <h3 className="text-2xl font-normal">
            Hemen katılın, EkmeklenYe ile satışlarınızı katlamaya başlayın
          </h3>

          <p className="text-base">
            Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi semtinizdekiler değil, 
            artık çevre semtlerdeki binlerce kullanıcı da işletmenizden sipariş verebilecek. Bir ev, bir 
            plaza, bir işyeri ya da üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık 
            müşteriniz.
          </p>

          <p className="text-base">
            Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size ulaştırıyoruz. 
            Sipariş teslimatını dilerseniz kendiniz yapabiliyorsunuz, dilerseniz EkmeklenYe 
            sizin adınıza kullanıcıya ulaştırıyor.
          </p>

          <p className="text-base">
            Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş ortaklarımızdan 
            biri olabilirsiniz.
          </p>

          <div className="mt-4">
            <button className="bg-pink-600 text-white px-4 py-1 rounded-md transition-transform transform hover:scale-105 cursor-pointer">
              Başlayalım
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;