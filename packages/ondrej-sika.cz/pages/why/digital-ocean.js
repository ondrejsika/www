import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function Page() {
  return (
    <Article
      title="DigitalOcean - Jednoduchy cloud pro kazdeho"
      hideNewsletter={true}
      markdown={`
## What is DigitalOcean?

TODO: Write an article

## Difference between Cloud and Server Provider

TODO: Write an article

## Save your's team time with DigitalOcean and Terraform

TODO: Write an article

## What is Terraform?

TODO: Write an article

## Learn more about DigitalOcean and Terraform

TODO: Write an article (1 hour webinar or meetup)

## Train your team

TODO: Write an article (invitation to public session)
`}
    />
  );
}
