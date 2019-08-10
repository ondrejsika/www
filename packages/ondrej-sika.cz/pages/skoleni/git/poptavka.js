import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import Form from "@app/ondrej-sika.cz/components/Form";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Poptávka Školení Git - Ondřej Šika</title>
    </Head>
    <Header
      websiteHeader="Poptávka Školení Gitu"
      inquiryBtn="Nezávazně poptat školení"
      logo="/static/git.svg"
    ></Header>
    <div className="container course-page">
      <TextArea TextParagraph="Pole označené * jsou povinné.">
        <Form
          course="Git"
          FormName="Jméno *"
          FromNamePlaceholder="Anton Hrabiš"
          FormCompany="Společnost"
          FormCompanyPlaceholder="Drůbežárny"
          FormEmail="Email *"
          FormEmailPlaceholder="anton@hrabis.cz"
          FormPhone="Telefon *"
          FormPhonePlaceholder="+420111222333"
          FormSent="Odeslat"
        />
      </TextArea>
    </div>
  </div>
);

export default Index;
