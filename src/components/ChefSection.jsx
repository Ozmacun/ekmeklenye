import React from "react";
import chef from "../assets/images/chef.webp";

const ChefSection = () => {
  return (
    <section className="pb-50 relative flex-col">
      <div className="max-w-6xl mx-auto px-6 md:px-2">
        <span className="text-2xl md:text-3xl max-w-6xl mx-auto px-6">
          {" "}
          Restoran veya Mahalle esnafı iş ortağımız olun
        </span>
      </div>
      <div className="">
        <img
          src={chef}
          alt=""
          className="w-full h-[650px] sm:h-[500px] md:h-[450px] lg:h-[400px] xl:h-[350px] object-cover"
        />
      </div>
      <div className="bg-white flex flex-col gap-6 border-black absolute left-1/3 top-3/5 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg w-[600px] h-[475px]  rounded-2xl ">
        <p className="text-xl md:text-2xl max-w-6xl ">
          Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın
        </p>
        <p className="">
          Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi
          semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da
          işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya da
          üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık
          müşteriniz.
        </p>
        <p className="">
          Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size
          ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz
          yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adınıza kullanıcıya
          ulaştırıyor.
        </p>
        <p className="">
          Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş
          ortaklarımızdan biri olabilirsiniz.
        </p>
        <div className="">
          <button className="bg-pink-600 text-white px-2 py-3 rounded-md transition-transform transform hover:scale-105 w-27 cursor-pointer">
            Başlayalım
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
