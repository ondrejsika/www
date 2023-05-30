import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="BIO"
    hideNewsletter={true}
    markdown={`
I'm a DevOps engineer, consultant, and lecturer from Prague. My job is help you with set up or improve DevOps culture, processes and tools to run and deliver your software products easier, faster and in more reliable way.

I also do popular DevOps related traing where I will teach you to use proven tools, techniques and technologies that will lead to faster development and safer operation of your software.
`}
  />
);

export default Page;
