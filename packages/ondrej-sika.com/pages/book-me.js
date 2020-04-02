import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export const BookMe = () => (
  <Article
    title="Book Me"
    hideNewsletter={true}
    markdown={`
Book my time using Calendly, ideally after email (<ondrej@sika.io>) confirmation:

- [One Day (training, consultation)](https://calendly.com/ondrejsika/1day)
- [Eventing Event](https://calendly.com/ondrejsika/evening-training) - eg.: White Label & HR Courses
- [Morning Event](https://calendly.com/ondrejsika/morning) - eg.: White Label & HR Courses
- [Lunch](https://calendly.com/ondrejsika/friday-lunch)
- [Beer](https://calendly.com/ondrejsika/beer)
- [Long Call](https://calendly.com/ondrejsika/friday-call) - 10 minutes and more
`}
  />
);

export default BookMe;
