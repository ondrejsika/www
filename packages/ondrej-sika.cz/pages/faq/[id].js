import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import BlogBox from "@app/ondrejsika-theme/components/BlogBox";
import Markdown from "@app/common/components/Markdown";
import faq_cz_yml from "@app/data/faq-cs.yml";

let faq_cz_yml_id_map = {};
faq_cz_yml.map((element, i) => {
  faq_cz_yml_id_map[element.id] = i;
});

const Page = props => {
  if (!props.faq_id) {
    return <div></div>;
  }
  let faq = faq_cz_yml[faq_cz_yml_id_map[props.faq_id]];
  return (
    <Article
      title={`${faq.question}`}
      noBlogBoxContent={[
        <BlogBox key={0}>
          <Markdown source={faq.answer} />
        </BlogBox>
      ]}
    />
  );
};

Page.getInitialProps = async function(context) {
  return { faq_id: context.query.id };
};

export default Page;
