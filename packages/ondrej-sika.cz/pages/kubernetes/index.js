import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = props => (
  <Article
    site={props.site}
    title="Kubernetes"
    markdown={`
- [Instalace](/kubernetes/instalace)
- [Pridani Kubernetes clusteru do Gitlabu](/kubernetes/pridani-kubernetes-clusteru-do-gitlabu)
- [Persistentni storage pomocí Cephu](/blog/ceph-persistent-volumes-v-kubernetes-pomoci-rook/) (blog post)
`}
  />
);

export default Page;
