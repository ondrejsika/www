import styled from "styled-components";
import Translate from "@app/common/components/Translate";
import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import default_colors from "@app/ondrejsika-theme/config/colors";

const LecturerCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid ${default_colors.LIGHT_GREY};
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

const ImageWrapper = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  text-align: center;

  img {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  h4 {
    margin-top: 1rem;
    font-weight: 700;
    color: ${default_colors.BLUE};
  }
`;

const Description = styled.p`
  padding: 1rem 2rem 2rem 2rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #4a5568;
`;

const AboutLecturer = (props) => (
  <LecturerCard>
    <ImageWrapper>
      <img
        src={ondrejsika.src}
        alt="Ondřej Šika"
        className="img-fluid rounded-circle"
        width="140"
      />
      <h4>Ondřej Šika</h4>
    </ImageWrapper>
    <Description>
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
    </Description>
  </LecturerCard>
);

export default AboutLecturer;
