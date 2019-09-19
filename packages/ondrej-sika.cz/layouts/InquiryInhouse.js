import Head from "next/head";

import Header from "@app/ondrej-sika.cz/components/Header";
import PipedriveContactForm from "@app/ondrej-sika.cz/components/PipedriveContactForm";

export default props => (
  <div>
    <Head>
      <title>Poptávka firemního {props.course_name} - Ondřej Šika</title>
    </Head>
    <Header
      websiteHeaderCenter={"Poptávka firemního " + props.course_name}
    ></Header>
    <div className="container course-page">
      <PipedriveContactForm />
    </div>
  </div>
);
