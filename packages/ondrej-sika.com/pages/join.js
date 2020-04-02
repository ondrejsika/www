import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function InvitePage() {
  return (
    <Article
      title="Join me on Slack, LinkedIn a Facebook"
      hideNewsletter={true}
      markdown={`
## Slack

Join Slack using this link: <https://sika.link/slack-sikapublic>


## LinkedIn

- Group for Ateendees: [Ondrej Sika Training - Attendees](https://www.linkedin.com/groups/8919602/)
- My Page: [Ondrej Sika](https://www.linkedin.com/company/ondrejsika)

## Facebook

- Skupina pro účastníky: [Ondrej Sika Training - Attendees](https://www.facebook.com/groups/199561764681068/)
- My Page: [Ondrej Sika](https://www.facebook.com/ondrejsikafreelancer/)

## Newsletter

Would you like to receive my tech newsletter? [Subscribe!](https://sika.link/newsletter-en/)
    `}
    />
  );
}
