import ThreeCol from '@app/course-landing/components/ThreeCol';
import ReactMarkdown from 'react-markdown'

const Contact = (props) => (
  <ThreeCol
    col1={
      <ReactMarkdown source={`
#### Ondřej Sika

<ondrej@ondrejsika.com>
<br>[ondrej-sika.cz](https://ondrej-sika.cz)
<br>[+420 773 452 376](tel:+420773452376)
    `} escapeHtml={false}/>
    }
    col2={
      <ReactMarkdown source={`
#### Fakturační údaje

Ondrej Sika
<br>Klatovská třída 1532/71
<br>301 00 Plzeň
<br>Česká Republika

IC: 88114163
<br>DIC: CZ9302252102
    `} escapeHtml={false}/>
    }
    col3={
      <ReactMarkdown source={`
#### Platební údaje

CZ(CZK): 2500171198 / 2010
<br>SK(EUR): 2500171198 / 8330

IBAN: CZ0620100000002500171198
<br>BIC code / SWIFT: FIOBCZPPXXX
    `} escapeHtml={false}/>
    }
  />
)

export default Contact
