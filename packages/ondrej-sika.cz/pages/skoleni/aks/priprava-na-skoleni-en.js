// dev: http://localhost:3010/skoleni/aks/priprava-na-skoleni-en/
// prod: https://ondrej-sika.cz/skoleni/aks/priprava-na-skoleni-en/

import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Prepare for Azure Kubernetes (AKS) Training"
    before={
      <div className="alert alert-warning mb-4">
        <p className="mb-0">
          If you don&apos;t want install anything, I&apos;ll have lab
          environment prepared for you in Azure.
          <br />
          If you have any question, ask me using via{" "}
          <a href="mailto:ondrej@sika.io">ondrej@sika.io</a>.
        </p>
      </div>
    }
    markdown={`
## My Lab Environment (in Azure)

No need to install anything, I have prepared lab environment for you in Azure.

## Local environment

You can use your local environment. You have to have an Azure Subscription (for test / demo purposes) and installed following tools:

- Git
- Text Editor (I recommend VS Code)
- Terraform
- \`kubectl\`
- \`helm\`
- \`az\` - Azure CLI
`}
  />
);

export default Page;
