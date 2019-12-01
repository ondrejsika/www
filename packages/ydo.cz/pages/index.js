import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <div>
    <Head>
      <title>YDO.cz</title>
    </Head>
    <Markdown
      source={`
We're your devops. Open for new challenges.

We can:

- Build your infrastucture
- Run your production
- Help with develepment

Contact us on <info@ydo.cz>.
    `}
    />
  </div>
);

export default Index;
