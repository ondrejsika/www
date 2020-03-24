import React from "react";
import Head from "next/head";

import Markdown from "@app/common/components/Markdown";
import Header from "@app/ondrejsika-theme/components/Header";
import TwoCol from "@app/ondrejsika-theme/components/TwoCol";
import References from "@app/ondrejsika-theme/components/References";
import Price from "@app/ondrejsika-theme/components/Price";
import "@app/course-landing/components/TwitterRecommendations";
import Translate from "@app/common/components/Translate";
import UpcomingSessions from "@app/ondrejsika-theme/components/UpcomingSessions";

import TwitterRecommendations from "@app/course-landing/components/TwitterRecommendations";
import PipedriveContactForm from "@app/ondrejsika-theme/components/PipedriveContactForm";

const Course = props => (
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
    />
    <div className="container course-page mt-3">
      {props.show_sessions && (
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
            site_name={props.site && props.site.name}
            location={props.location}
            course_id={props.course_id}
            limit={3}
          />
        </>
      )}

      {props.children}
      <Markdown source={props.description} />
      {props.col1 && props.col2 && (
        <TwoCol
          col1={<Markdown source={props.col1} />}
          col2={<Markdown source={props.col2} />}
        />
      )}
    </div>
    {props.recommendations && (
      <References ids={props.recommendations} lang={props.lang} />
    )}
    <div className="container mb-4 mt-4">
      {props.twitter_recommendations &&
        props.twitter_recommendations.length > 0 && (
          <>
            <h3>Ohlasy z Twitteru</h3>
            <TwitterRecommendations ids={props.twitter_recommendations} />
          </>
        )}
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

export default Course;
