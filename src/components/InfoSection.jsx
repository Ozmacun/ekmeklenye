import React from "react";
import { FaCheck } from "react-icons/fa6";

const InfoSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-10 mt-50 text-gray-700">
      {/* Metin İçeriği */}
      <p className="mb-4">
        Türkiye'nin 81 şehri ve KKTC'de, 50 bini aşkın restoran iş ortağımızla, Türkiye’de online yemek siparişi denince ilk akla gelen markayız! 
        Restoran zincirleri başta olmak üzere, civarınızdaki en sevdiğiniz restoranlardan kolayca sipariş verebilirsiniz.
      </p>
      <p className="mb-4">
        Bunun yanında, hızlı market alışverişine ihtiyacınız varsa, EkmeklenYe Market hizmetinizde! Binlerce market ürünü dilediğiniz anda, dakikalar içinde gelsin!
      </p>
      <p className="mb-4">
        Restoranınızı seçin, istediğiniz yemekleri sepete ekleyin, online ya da kapıda dilediğiniz gibi ödeyin. Gerisi kolay, siparişiniz hızlıca kapınızda!
      </p>
      <p className="mb-6">
        EkmeklenYe Mahalle de burada! Çevrenizdeki bildiğiniz, güvendiğiniz işletme ve esnaflar; marketten kasaba, şarküteriden manava, balıkçıdan petshopa, tüm kampanyaları ve fırsatlarıyla siparişiniz için hazır.
      </p>

      {/* Başlık */}
      <h2 className="font-bold text-lg mb-4">EkmeklenYe’de sizi neler bekliyor?</h2>

      {/* Listeli İçerik */}
      <ul className="space-y-2">
        <li className="flex items-center">
          <FaCheck className="text-red-500 mr-2" /> Yemek siparişi ya da market alışverişinde onlarca mutfak ve kategori, binlerce çeşit ürün!
        </li>
        <li className="flex items-center">
          <FaCheck className="text-red-500 mr-2" /> Yemek ve market ihtiyaçlarınızda her gün on binlerce indirim!
        </li>
        <li className="flex items-center">
          <FaCheck className="text-red-500 mr-2" /> Online ya da kapıda, dilediğiniz gibi ödeme seçeneği!
        </li>
        <li className="flex items-center">
          <FaCheck className="text-red-500 mr-2" /> Siparişinizle ilgili size her zaman destek olmaya hazır, 7/24 Canlı Yardım ekibi!
        </li>
      </ul>

      {/* Alt Bilgi */}
      <p className="mt-6">Tek yapmanız gereken ihtiyacınızı düşünmek ve çevrenizdeki seçeneklere göz atmak!</p>
      <p className="font-bold mt-4">EkmeklenYe yanında, aklındaysa kapında!</p>
    </section>
  );
};

export default InfoSection;
