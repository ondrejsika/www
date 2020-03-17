import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrejsika-theme/components/Header";
import TextArea from "@app/ondrejsika-theme/components/TextArea";
import TwoCol from "@app/ondrejsika-theme/components/TwoCol";
import References from "@app/ondrejsika-theme/components/References";
import Price from "@app/ondrejsika-theme/components/Price";
import Form from "@app/ondrejsika-theme/components/Form";

import Head from "next/head";

let site = {
  lang: "cs"
};

const Index = () => (
  <div>
    <Head></Head>
    <Header
      websiteHeader="Poptávka Školení Ansible"
      inquiryBtn="Nezávazně poptat školení"
      logo="/static/ansible.png"
    ></Header>
    <div className="container course-page">
      <TextArea TextParagraph="Pole označené * jsou povinné.">
        <Form
          course="Ansible"
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
