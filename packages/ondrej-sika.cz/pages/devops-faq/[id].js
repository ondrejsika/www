import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";
import BlogBox from "@app/ondrejsika-theme/components/BlogBox";
import Markdown from "@app/common/components/Markdown";
import faq_cz_yml from "@app/data/faq-cs.yml";

let faq_cz_yml_id_map = {};
faq_cz_yml.map((element, i) => {
  faq_cz_yml_id_map[element.id] = i;
});

const Page = (props) => {
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

export async function getStaticProps(context) {
  return {
    props: {
      faq_id: context.params.id
    }
  };
}

export async function getStaticPaths() {
  const paths = faq_cz_yml.map((faq) => ({
    params: { id: faq.id }
  }));

  return {
    paths,
    fallback: false
  };
}

export default Page;
