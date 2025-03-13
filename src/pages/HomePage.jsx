import React from "react";
import InfoSection from "../components/InfoSection";
import PageContent from "../layout/PageContent";
import ChefSection from "../components/ChefSection";




export default function HomePage() {
    console.log("HomePage Render Edildi!"); 
  return (
    // Konsolda bu mesajı görebiliyor musun?
    <div className="">
      <PageContent>
        <ChefSection/>
        <InfoSection/>
      </PageContent>
    </div>
  );
}
