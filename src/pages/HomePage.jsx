import React from "react";
import InfoSection from "../components/InfoSection";
import PageContent from "../layout/PageContent";
import ChefSection from "../components/ChefSection";
import HeroSection from "../components/HeroSection";
import CitiesSection from "../components/CitiesSection";
import PhoneSection from "../components/PhoneSection";

export default function HomePage() {
  return (
    <div className="">
      <PageContent>
        <HeroSection/>
        <ChefSection/>
        <CitiesSection/>
        <PhoneSection/>
        <InfoSection/>
      </PageContent>
    </div>
  );
}
