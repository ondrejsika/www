import Head from "next/head";

import Header from "@app/ondrejsika-theme/components/Header";

const InquiryInhouse = (props) => (
  <div>
    <Head>
      <title>Poptávka firemního {props.course_name} - Ondřej Šika</title>
    </Head>
    <Header
      websiteHeaderCenter={"Poptávka firemního " + props.course_name}
    ></Header>
  </div>
);

InquiryInhouse.displayName = "InquiryInhouse";

export default InquiryInhouse;
