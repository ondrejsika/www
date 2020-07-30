import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function Page() {
  return (
    <Article
      title="Why Pages"
      hideNewsletter={true}
      markdown={`
- [DevOps Berlin](/why/devops-berlin)
- [Git Berlin](/why/git-berlin)
- [Gitlab CI Berlin](/why/gitlab-ci-berlin)
- [Ansible Berlin](/why/ansible-berlin)
- [Docker Berlin](/why/docker-berlin)
- [Kubernetes Berlin](/why/kubernetes-berlin)
- [Digital Ocean Berlin](/why/digital-ocean-berlin)
`}
    />
  );
}
