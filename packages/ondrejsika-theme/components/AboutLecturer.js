import React from "react";
import styled from "styled-components";
import Translate from "@app/common/components/Translate";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import default_colors from "@app/ondrejsika-theme/config/colors";

const Border = styled.div`
  border: 1px solid ${default_colors.LIGHT_GREY};
  border-radius: 5px;
  margin-bottom: 1em;
`;

const AboutLecturer = props => (
  <Border>
    <div className="text-center p-3">
      <img
        src={ondrejsika}
        className="img-fluid rounded-circle mb-3"
        width="140"
      />
      <h4>Ondřej Šika</h4>
    </div>
    <p className="p-3">
      <Translate
        lang={props.lang}
        cs="Jsem freelance DevOps konzultant a lektor. Zlepšuji práci
            vývojářských týmu zaváděním efektivních procesů ve vývoji.
            Naučím Vás používat prověřené nástroje a technologie, které
            povedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho
            software."
        en="I'm a software engineer since 2009. These days, I'm focused in DevOps. I've stated with training in 2013, since then I've made more than 170 training sessions for more than 750 people. My cliets are banks, telco & large enterpises as well as startups and small companies."
        sk="Volám sa Ondřej Šika, vyvíjam softvér pre Slush Pool a školím. Školím prevažne Docker a CI, ktorý spolu s Dockerom veľmi úzko súvisí. Ďalšie školenia nájdete na mojom webe [ondrej-sika.cz](https://ondrej-sika.cz/). Všetky kurzy vediem osobne. S Dockerom mám viac ako štyri roky skúseností v rámci komerčného vývoja softvéru. Docker používam denne vo vývoji, ale aj na produkcii a prácu bez neho si už neviem ani predstaviť."
      />
    </p>
  </Border>
);

export default AboutLecturer;
