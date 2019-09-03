import ThreeCol from "@app/course-landing/components/ThreeCol";
import Markdown from "@app/common/components/Markdown";

const Contact = props => (
  <ThreeCol
    col1={
      <Markdown
        source={`
#### Ondřej Šika

<ondrej@sika.io>
<br>[ondrej-sika.cz](https://ondrej-sika.cz)
<br>[+420 773 452 376](tel:+420773452376)
    `}
      />
    }
    col2={
      <Markdown
        source={`
#### Fakturačné údaje

Ondřej Šika
<br>Klatovská třída 1532/71
<br>301 00 Plzeň
<br>Česká Republika

IC: 88114163
<br>DIC: CZ9302252102
    `}
      />
    }
    col3={
      <Markdown
        source={`
#### Platobné údaje

CZ(CZK): 2500171198 / 2010
<br>SK(EUR): 2500171198 / 8330

IBAN: CZ0620100000002500171198
<br>BIC code / SWIFT: FIOBCZPPXXX
    `}
      />
    }
  />
);

export default Contact;
