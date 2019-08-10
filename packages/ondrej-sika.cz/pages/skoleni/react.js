import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import Form from "@app/ondrej-sika.cz/components/Form";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Školení React & Next.js - Ondrej Sika</title>
    </Head>
    <Header
      websiteHeader="Školení React & Next.js"
      inquiryBtn="Nezávazně poptat školení"
      logo="/static/react.svg"
    ></Header>
    <div className="container course-page mt-5">
      <div className="alert alert-danger" role="alert">
        <h2>Pripravuji ...</h2>
        Na kurzu momentalne pracuji, pokud mate zajem, napiste mi email nebo
        vyplnte poptavku. Ozvu se Vam.
      </div>
    </div>
    <div className="container">
      <TextArea
        TextHeader="Poptávka firemního školeni Reactu"
        TextParagraph="Pole označené * jsou povinné."
      >
        <Form
          course="React"
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
