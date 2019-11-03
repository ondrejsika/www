import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrej-sika.cz/components/Header";
import TextArea from "@app/ondrej-sika.cz/components/TextArea";
import TwoCol from "@app/ondrej-sika.cz/components/TwoCol";
import References from "@app/ondrej-sika.cz/components/References";
import Price from "@app/ondrej-sika.cz/components/Price";
import OrderBtn from "@app/ondrej-sika.cz/components/OrderBtn";
import "@app/course-landing/components/TwitterRecommendations";
import Translate from "@app/common/components/Translate";
import UpcomingSessions from "@app/ondrej-sika.cz/components/UpcomingSessions";

import Head from "next/head";
import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";
import PipedriveContactForm from "../components/PipedriveContactForm";

export default props => (
  <div>
    <Head>
      <title>
        {props.course_title} -{" "}
        {(props.site && props.site.default_title) || "Ondrej Sika"}
      </title>
    </Head>
    <Header
      websiteHeader={props.course_title}
      inquiryBtn={
        <Translate
          lang={props.lang}
          cs="Nezávazně poptat školení"
          en="Ask for a training"
          de="Schulung anfragen"
        />
      }
      logo={props.logo}
    ></Header>
    <div className="container course-page mt-3">
      {(() => {
        if (props.show_sessions) {
          return (
            <>
              <h2>
                <Translate
                  lang={props.lang}
                  cs="Vypsané termíny"
                  en="Public session"
                  de="Termine"
                />
              </h2>
              <UpcomingSessions
                hide_add_to_google_calendar={props.hide_add_to_google_calendar}
                lang={props.lang}
                course_id={props.course_id}
                limit={3}
              />
            </>
          );
        }
      })()}

      {props.children}
      <Markdown source={props.description} />
      <TwoCol
        col1={<Markdown source={props.col1} />}
        col2={<Markdown source={props.col2} />}
      />
    </div>
    {(() => {
      if (props.recommendations)
        return <References ids={props.recommendations} lang={props.lang} />;
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
    <Price
      PriceHeader={
        <Translate
          lang={props.lang}
          cs="Cena za školení"
          en="Price"
          de="Preis"
        />
      }
      PriceBtn={
        <Translate
          lang={props.lang}
          cs="Nezávazně poptat školení"
          en="Request Training"
        />
      }
    >
      <Translate
        lang={props.lang}
        cs="Otevřený termín"
        en="Public session"
        de="Öffentlicher Termin"
      />
      : {props.price_self_funded}{" "}
      <Translate
        lang={props.lang}
        cs="bez DPH"
        en="excl. VAT"
        de="zzgl. MwSt"
      />
      <br />
      <Translate
        lang={props.lang}
        cs="Firemní školení"
        en="Company traning (in-house)"
        de="On-Premise Schulung"
      />
      : {props.price_in_house}{" "}
      <Translate
        lang={props.lang}
        cs="bez DPH"
        en="excl. VAT"
        de="zzgl. MwSt"
      />
    </Price>
    <div className="container">
      <PipedriveContactForm lang={props.lang} />
    </div>
  </div>
);
