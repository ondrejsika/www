import Head from "next/head";
import MeetupPage from "@app/meetup-theme/layouts/MeetupPage";

const Index = () => (
  <MeetupPage
    meetup_name="Salzburg DevOps Meetups"
    about_us_header="About Us"
    about_us_content={
      "We are DevOps community in Salzburg. We share knowledge and experiences from using tools like CI, Docker, Kubernetes, ELK / EFK, and much more."
    }
    join_us_header="Join Us"
    join_us_content={
      <p>
        Let us know if you are interested. Drop us mail to{" "}
        <a href="mailto:meetup@salzburgdevops.com">meetup@salzburgdevops.com</a>
        .
      </p>
    }
  />
);

export default Index;
