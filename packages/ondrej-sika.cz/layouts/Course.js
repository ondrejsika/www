import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import Form from "@app/ondrej-sika.cz/components/Form";
import "@app/course-landing/components/TwitterRecommendations";

import Head from "next/head";
import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";

import site from "@app/ondrej-sika.cz/config";

export default props => (
  <div>
    <Head>
      <title>{props.course_title} - Ondrej Sika</title>
    </Head>
    <Header
      websiteHeader={props.course_title}
      inquiryBtn="Nezávazně poptat školení"
      logo={props.logo}
    ></Header>
    <div className="container course-page">
      {props.children}
      <Markdown source={props.description} />
      <TwoCol
        col1={<Markdown source={props.col1} />}
        col2={<Markdown source={props.col2} />}
      />
    </div>
    {(() => {
      if (props.recommendations)
        return <References ids={props.recommendations} lang={site.lang} />;
    })()}
    <div className="container mb-4 mt-4">
      {(() => {
        if (props.twitter_recommendations)
          return (
            <>
              <h3>Ohlasy z Twitteru</h3>
              <TwitterRecommendations ids={props.twitter_recommendations} />
            </>
          );
      })()}
    </div>
    <Price PriceHeader="Cena za školení" PriceBtn="Nezávazně poptat školení">
      Otevřený termín (self funded): {props.price_self_funded} bez DPH
      <br />
      Otevřený termín (company funded): {props.price_company_funded} bez DPH
      <br />
      Firemní školení (ve firmě): {props.price_in_house} CZK bez DPH
    </Price>
    <div className="container">
      <TextArea
        TextHeader="Poptávka firemního školení"
        TextParagraph="Pole označené * jsou povinné."
      >
        <Form
          course={props.course_title}
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
