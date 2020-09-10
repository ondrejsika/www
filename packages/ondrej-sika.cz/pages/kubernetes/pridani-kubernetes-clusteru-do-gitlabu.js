import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = props => (
  <Article
    site={props.site}
    title="Pridani Kubernetes clusteru do Gitlabu"
    ad="kubernetes"
    markdown={`
Z clusteru potrebujete ziskat informace kam se ma Gitlab pripojit a jak se ma autentifikovat. Budete potrebovat \`server_url\`, \`ca\` a \`token\`.

### Server URL

\`\`\`
kubectl config view --flatten --minify -o jsonpath="{.clusters[0].cluster.server}"
\`\`\`


Nebo rovnou zkopirovat do schranky (na Macu):

\`\`\`
kubectl config view --flatten --minify -o jsonpath="{.clusters[0].cluster.server}" | pbcopy
\`\`\`

### CA

\`\`\`
kubectl config view --flatten --minify -o jsonpath="{.clusters[0].cluster.certificate-authority-data}" | base64 -D
\`\`\`


Nebo rovnou zkopirovat do schranky (na Macu):

\`\`\`
kubectl config view --flatten --minify -o jsonpath="{.clusters[0].cluster.certificate-authority-data}" | base64 -D | pbcopy
\`\`\`

### Token

\`\`\`
kubectl config view --flatten --minify -o jsonpath="{.users[0].user.token}"

\`\`\`


Nebo rovnou zkopirovat do schranky (na Macu):

\`\`\`
kubectl config view --flatten --minify -o jsonpath="{.users[0].user.token}" | pbcopy
\`\`\`

`}
  />
);

export default Page;
