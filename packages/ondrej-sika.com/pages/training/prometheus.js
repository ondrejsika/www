import React from "react";
import Course from "@app/ondrejsika-theme/layouts/Course";

const Page = props => (
  <Course
    lang={props.site.lang}
    course_id="prometheus"
    show_sessions={true}
    course_title="Prometheus Training"
    logo="/static/prometheus.png"
    price_self_funded="399 EUR"
    price_in_house="xx EUR"
    description={`
### What is Prometheus
Prometheus is widely-adopted open-source systems monitoring and alerting toolkit and metrics server. It allows you to collect data metrics from your app and most of your infrastructure components, as well as slicing and dicing them in order to generate ad-hoc graphs, tables and alerts. Both Prometheus and Kubernetes joined CNCF - Cloud Native Computing Foundation.

### Course Outline
- Introduction to Prometheus ecosystem
- How to install Prometheus and Alertmanager
- Data collection - Exporters
- Prometheus and Alertmanager configuration
- How to work with PROMQL (query language of Prometheus)
- Grafana integration
- Prometheus Pushgateway
- Docker, Kubernetes and custom app integrations

### Who Should Attend
This training course is primarily aimed at developers and DevOps (Server Administrators) teams, who want to monitor applications easily and comfortably.

#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge

#### Technical Requirements
- Access to the internet - ideally without corporate proxy
- Installed Docker or Prometheus, Alertmanager, Pushgateway and Grafana

Installation instructions [here](/instructions/prometheus)
    `}
  />
);

export default Page;
