import React from "react";
import { Link } from "react-router-dom";

const cities = [
  {
    name: "Ankara",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Antalya",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Bursa",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Istanbul",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Izmir",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=600",
  },
];

const CitiesSection = () => {
  return (
    <section className="py-16 bg-white mt-32 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 mt-30">
        <h2 className="text-3xl font-normal text-gray-800 mb-8">
          Türkiye'nin her şehrindeyiz!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link to="/"
              key={city.name}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={city.image}
                alt={`${city.name} city`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-4 left-4 text-gray-700 text-lg font-medium border-4 bg-white px-4 py-1 rounded-lg cursor-pointer">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
