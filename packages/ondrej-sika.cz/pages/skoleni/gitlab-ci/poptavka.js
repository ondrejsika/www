import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";

import Head from "next/head";

let site = {
  lang: "cs"
};

const Index = () => (
  <div>
    <Head>
      <title>Poptávka Školení Gitlab CI - Ondřej Šika</title>
    </Head>
    <Header
      websiteHeader="Poptávka Školení Gitlab CI"
      inquiryBtn="Nezávazně poptat školení"
      logo="/static/gitlab-ci.svg"
    ></Header>
    <div className="container course-page">
      <TextArea TextParagraph="Pole označené * jsou povinné.">
        <Form
          course="Gitlab CI"
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
