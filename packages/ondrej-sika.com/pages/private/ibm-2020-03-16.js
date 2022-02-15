import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = (props) => (
  <Article
    site={props.site}
    hideNewsletter={true}
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

## Repositories We've Created

- Helm package for couter app - https://github.com/sika-training-examples/helm-counter--2020-03-19
- Gitlab CI deployment using Helm - https://github.com/sika-training-examples/gitlab-ci-helm-deployment--2020-03-19


## Recordings

- Monday - https://www.youtube.com/watch?v=AKEQ_gwY01w
- Tuesday - https://www.youtube.com/watch?v=cFx-P0DWPbU, https://www.youtube.com/watch?v=fTMACz6laQU
- Wednesday - https://www.youtube.com/watch?v=bEndEYAlbaU
- Thursday - https://www.youtube.com/watch?v=fwbfsLELoeg
- Friday - https://www.youtube.com/watch?v=sNbbF-gN2Zs

## Reccommend me on LinkedIn & Twitter, Please

Do you like the course? Write me recommendation on Twitter (with handle @ondrejsika) and LinkedIn (add me /in/ondrejsika and I'll send you request for recommendation). Thanks.

## Join me on Facebook, Linkedin & Newsletter

If you're interested in news about DevOps and my work you can [subscribe my newsletter](https://sika.link/newsletter-en) and join my groups on [Facebook](https://www.facebook.com/groups/199561764681068) or [LinkedIn](https://www.linkedin.com/groups/8919602/).

## Questions

In case of any questions, drop me an email to <ondrej@sika.io>
    `}
  />
);

export default Page;
