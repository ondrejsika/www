import React from "react";
import BaseLandingPage from "@app/ondrejsika-theme/layouts/BaseLandingPage";

const LandingPage = props => (
  <BaseLandingPage
    site={props.site}
    headerText={
      <>
        Jsem <BaseLandingPage.TextBeige>Ondřej Šika</BaseLandingPage.TextBeige>
        <br /> a pomohu vám s open-source
        <br />
        <BaseLandingPage.TextBeige>
          DevOps technologiemi
        </BaseLandingPage.TextBeige>
        !
      </>
    }
    headerAbout="Snížime spolu náklady na IT, vyřešíme technologický dluh a připravíme Vaši IT architekturu na rapidní škálování."
    sectionBoxesHeader="S ČÍM VÁM POMOHU"
    boxHeader1="IMPLEMENTACE DEVOPS PIPELINE"
    boxText1="Zavedu open-source DevOps do Vaší firmy. Nastavím nástroje a procesy tak, abyste automaticky, spolehlivě a rychle doručovali novou funkcionalitu Vašim zákazníkům."
    boxHeader2={
      <span>
        KONZULTACE
        <br />& SUPPORT
      </span>
    }
    boxText2="Vyřeším Váš konkrétní problém formou konzultací, čímž se vyvarujete zbytečných a drahých chyb. Já a můj tým Vám budeme oporou při provozu Vaší DevOps infrastruktury formou jednoho z našich support plánů."
    boxHeader3={
      <span>
        ŠKOLENÍ
        <br /> VAŠEHO TÝMU
      </span>
    }
    boxText3="Vyškolím Váš tým tak, aby mohl sám a efektivně vytvořit DevOps pipeline a pracovat s ním. Vše si vyzkoušíme na hands-on workshopech po jejichž absolvování budete schopni bezpečně spravovat a rychle rozvíjet Vaše DevOps prostředí."
    sectionMyClientsHeader="moji klienti"
  />
);

export default LandingPage;
