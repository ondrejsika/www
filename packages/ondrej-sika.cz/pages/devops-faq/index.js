import Article from "@app/ondrejsika-theme/layouts/Article";
import BlogBox from "@app/ondrejsika-theme/components/BlogBox";
import Markdown from "@app/common/components/Markdown";
import Link from "next/link";
import faq_cz_yml from "@app/data/faq-cs.yml";

const Page = () => (
  <Article
    title="DevOps FAQ"
    noBlogBoxContent={faq_cz_yml.map((faq, i) => (
      <BlogBox key={i}>
        <Link href={"/devops-faq/" + faq.id} style={{ color: "black" }}>
          <h2>{faq.question}</h2>
        </Link>
        <Markdown source={faq.answer} />
      </BlogBox>
    ))}
  />
);

export default Page;
