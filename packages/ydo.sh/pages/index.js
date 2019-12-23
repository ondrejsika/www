import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <div>
    <Head>
      <title>YDO.sh</title>
    </Head>
    <Markdown
      source={`
We're your devops. Open for new challenges.

We can:

- Build your infrastucture
- Run your production
- Help with develepment

Contact us on <info@ydo.sh>.
    `}
    />
  </div>
);

export default Index;
