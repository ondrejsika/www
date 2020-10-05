import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up Index"
    hideNewsletter={true}
    markdown={`
- [Docker & Kubernetes, Eurosoftware, 29. 9. 2020](/follow-up/2020-09-29-eurosoftware-docker-kubernetes)
- [Git, O2, 24. 9. 2020](/follow-up/2020-09-24-o2-git)
- [Terraform, 25. 9. 2020](/follow-up/2020-09-25-terraform)
- [Kubernetes, 17. 9. 2020](/follow-up/2020-09-17-kubernetes)
- [Gitlab CI, 16. 9. 2020](/follow-up/2020-09-16-gitlab-ci)
- [Git, Gordic, 14. 9. 2020](/follow-up/2020-09-14-gordic-git)
- [Git, ZCU, 9. 9. 2020](/follow-up/2020-09-09-zcu-git)
- [Docker & Kubernetes, Adbros, 5. 8. 2020](/follow-up/2020-08-05-adbros-docker-kubernetes)
- [Gitlab CI, SNK, 31. 7. 2020](/follow-up/2020-07-31-snk-gitlab-ci)
`}
  />
);

export default Page;
