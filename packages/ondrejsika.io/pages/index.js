import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <div>
    <Head>
      <title>Blog - Ondrej Sika, ondrejsika.io</title>
    </Head>
    <Markdown
      source={`
# Blog

`}
    />
  </div>
);

export default Index;
