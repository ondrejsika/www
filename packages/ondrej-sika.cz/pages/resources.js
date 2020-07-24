import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Resources"
    subheader="Odkazy na zajimave lidi, clanky, projekty a repozitate ..."
    markdown={`
## Management

- Paul Graham: Maker's Schedule, Manager's Schedule - http://www.paulgraham.com/makersschedule.html


## Essays

- Paul Graham - http://www.paulgraham.com/articles.html


## Go

- A Tour of Go - https://tour.golang.org/
- Go by Example - https://gobyexample.com/


## Rust

- http://hello-rust.show/


## Go vs Rust
- Matthias Endler: Go vs Rust? Choose Go. - https://endler.dev/2017/go-vs-rust/


## Service Mesh

- [Kubernetes Service Mesh: A Comparison of Istio, Linkerd and Consul](https://platform9.com/blog/kubernetes-service-mesh-a-comparison-of-istio-linkerd-and-consul/), Platform9, 21. 10. 2019
`}
  />
);

export default Page;
