import Head from "next/head";
import HeaderBar from "@app/meetup-theme/components/HeaderBar";
import HeaderLarge from "@app/meetup-theme/components/HeaderLarge";
import Section from "@app/meetup-theme/components/Section";

export default props => {
  return (
    <div>
      <Head>
        <title>{props.meetup_name}</title>
      </Head>
      <div className="mt-3">
        <HeaderBar></HeaderBar>
      </div>
      <div className="mt-3">
        <HeaderLarge heading={props.meetup_name}></HeaderLarge>
      </div>
      <Section heading={props.about_us_header}>
        {props.about_us_content}
      </Section>
      <Section heading={props.join_us_header}>{props.join_us_content}</Section>
      {props.children}
    </div>
  );
};
