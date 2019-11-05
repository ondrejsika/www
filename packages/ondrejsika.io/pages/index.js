import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <div>
    <Head>
      <title>Ondrej Sika | ondrejsika.io</title>
    </Head>
    <div className="container mt-4">
      <Markdown
        source={`
# Ondrej Sika

[__ondrej@sika.io__](mailto:ondrej@sika.io) (freelance)
<br>
[ondrej@ondrejsika.com](mailto:ondrej@ondrejsika.com) (primary, personal)
<br>
[+420 773 452 376](tel:+420773452376)
<br>
[t.me/ondrejsika](https://t.me/ondrejsika) (Telegram)
`}
      />
    </div>
  </div>
);

export default Index;
