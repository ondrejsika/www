import React from "react";
import BaseLandingPage from "@app/ondrejsika-theme/layouts/BaseLandingPage";
import Translate from "@app/common/components/Translate";

const LandingPage = props => (
  <BaseLandingPage
    head="Ondrej Sika"
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
    findOutMore={
      <Translate lang={props.site.lang} cs="Zjistit více" en="!!!" />
    }
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
    sectionContactMeHeader="KONTAKTUJTE MĚ"
    call="Naplánujte hovor"
    email="Poslat&nbsp;email"
    sectionMyStoryHeader="MŮJ PŘÍBĚH"
    propsMyStoryText="K projektu prvního a nejúspěšnějšího Bitcoinového těžařského poolu v společnosti Braiins Systems jsem se přidal v čase jeho kompletního přepisování a škálování na robustnější infrastrukturu. Náročné požadavky na sofistikovanou a distribuovanou IT infrastrukturu stávající z desítek serverů rozmístěných na třech kontinentech nedávaly jinou možnost jako hned od začátku nasadit ty nejnovější DevOps technologie. Měl jsem tedy unikátní možnost osahat si open-source DevOps technologie a 5 let pracovat s týmem skvělých IT architektů a vizionářů - Honzou Čapkem, Pavlem Moravcem a Markem Palatinem."
    sectionWhyMeHeader="PROČ DO TOHO JÍT SE MNOU?"
    point1={
      <span>
        Dlouholeté <br /> zkušenosti
      </span>
    }
    point2={
      <span>
        Komplexní <br />
        pohled
      </span>
    }
    point3={
      <span>
        Výborné <br />
        reference
      </span>
    }
    point4={
      <span>
        Maximální <br />
        otevřenost
      </span>
    }
    // sectionStory="IMPLEMENTATION STUDY"
    sectionCooperationText="Máte dotaz nebo zájem o spolupráci?"
    writeMe="Napište mi"
  />
);

export default LandingPage;
