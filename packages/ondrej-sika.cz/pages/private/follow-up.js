import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up Index"
    hideNewsletter={true}
    markdown={`
- [Gitlab CI, SNK, 31. 7. 2020](/follow-up/2020-07-31-snk-gitlab-ci)
`}
  />
);

export default Page;
