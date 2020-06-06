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
  />
);

export default LandingPage;
