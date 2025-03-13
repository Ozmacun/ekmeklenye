import React from "react";
import PageContent from "../layout/PageContent";
import SiparisSehirlerBanner from "../components/SiparisSehirlerBanner";
import SiparisSehirDetay from "../components/SiparisSehirDetay";

export default function HomePage() {

  return (
    // Konsolda bu mesajı görebiliyor musun?
    <div className="">
      <PageContent>
        <SiparisSehirlerBanner/>
        <SiparisSehirDetay/>
      </PageContent>
    </div>
  );
}
