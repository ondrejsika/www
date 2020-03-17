import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export const BookMe = () => (
  <Article
    title="Book Me"
    hideNewsletter={true}
    markdown={`
Rezervujte si můj čas, ideálně po domluvě emailem (<ondrej@sika.io>) nebo telefonicky.

- [Školení, Konzultace (celý den)](https://calendly.com/ondrejsika/1day)
- [Večerní Event](https://calendly.com/ondrejsika/evening-training) - Pro White Label & HR Kurzy
- [Dopolední Event](https://calendly.com/ondrejsika/morning) - Pro White Label & HR Kurzy
- [Oběd](https://calendly.com/ondrejsika/friday-lunch)
- [Pivo](https://calendly.com/ondrejsika/beer)
- [Delší Call](https://calendly.com/ondrejsika/friday-call) - 10 minut a více
`}
  />
);

export default BookMe;
