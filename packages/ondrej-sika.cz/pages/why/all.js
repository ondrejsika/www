import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function Page() {
  return (
    <Article
      title="Why Pages (CZ)"
      hideNewsletter={true}
      markdown={`
- [DevOps](/why/devops)
- [Git](/why/git)
- [Gitlab CI](/why/gitlab-ci)
- [Ansible](/why/ansible)
- [Docker](/why/docker)
- [Kubernetes](/why/kubernetes)
- [DigitalOcean](/why/digital-ocean)
`}
    />
  );
}
