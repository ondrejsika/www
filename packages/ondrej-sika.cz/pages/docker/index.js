import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Docker"
    ad="docker"
    markdown={`
- [Instalace](/docker/instalace)
- [Docker s TLS](/docker/docker-s-tls)
- [Docker vs Podman: V čem se liší](/blog/docker-vs-podman-v-cem-se-lisi) (blog post)
- [Podman: "Docker" pod non-root uzivatelem](/blog/podman-docker-pod-non-root-uzivatelem) (blog post)
`}
  />
);

export default Page;
