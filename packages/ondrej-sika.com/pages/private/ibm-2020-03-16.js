import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = props => (
  <Article
    site={props.site}
    title="Docker &amp; Kubernetes @ IBM, 16. 3. 2020"
    markdown={`
## Course Repositories

- Docker - https://github.com/ondrejsika/docker-training/
- Kubernetes - https://github.com/ondrejsika/kubernetes-training/
- Gitlab CI - https://github.com/ondrejsika/gitlab-ci-training/
- Prometheus - https://github.com/ondrejsika/prometheus-training/

## Related Repositories We've Used

#### Kubernetes

- Traefik Ingress Controller - https://github.com/ondrejsika/kubernetes-ingress-traefik
- Simple Helm Package - https://github.com/ondrejsika/one-image-helm

#### Gitlab CI

- Image for CI runner \`ondrejsika/ci\` - https://github.com/ondrejsika/ondrejsika-ci-docker
- Example Deployment to Kubernetes using Gitlab CI - https://github.com/ondrejsika/gitlab-ci-example-kubernetes/

#### Prometheus

- Prometheus for Kubernetes - https://github.com/coreos/kube-prometheus

#### Terraform (Infrastructure as a Code)

- Kubernetes - https://github.com/ondrejsika/terraform-do-kubernetes-example
- Gitlab with CI - https://github.com/ondrejsika/terraform-demo-gitlab
- NFS - https://github.com/ondrejsika/terraform-demo-nfs

## Recordings

- Monday - https://www.youtube.com/watch?v=AKEQ_gwY01w
- Tuesday - https://www.youtube.com/watch?v=cFx-P0DWPbU, https://www.youtube.com/watch?v=fTMACz6laQU
- Wednesday - https://www.youtube.com/watch?v=bEndEYAlbaU
- Thursday - https://www.youtube.com/watch?v=fwbfsLELoeg
- Friday - https://www.youtube.com/watch?v=sNbbF-gN2Zs

## Questions

In case of any questions, drop me an email to <ondrej@sika.io>
    `}
  />
);

export default Page;
