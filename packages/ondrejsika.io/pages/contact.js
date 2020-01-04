import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <div>
    <Head>
      <title>Contact - Ondrej Sika, ondrejsika.io</title>
    </Head>
    <Markdown
      source={`
# Ondrej Sika

[ondrej@ondrejsika.com](mailto:ondrej@ondrejsika.com)
<br>
[+420 773 452 376](tel:+420773452376)
<br>
[t.me/ondrejsika](https://t.me/ondrejsika) (Telegram)

[github](https://github.com/ondrejsika)
<br>
[twitter](https://github.com/twitter)
`}
    />
  </div>
);

export default Index;
