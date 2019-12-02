import Course from "@app/ondrej-sika.cz/layouts/Course";
import logo from "@app/data/pictures/courses/prometheus-white.png";

export default props => (
  <Course
    course_id="prometheus"
    show_sessions={true}
    lang={props.site.lang}
    course_title="Školení Prometheus"
    logo={logo}
    price_self_funded="6800 CZK"
    price_in_house="25 000 CZK"
    location="cz"
    description={`
### Co je to Prometheus

Prometheus je moderni monitoringovy nastroj a metrics server. Umoznuje sbirat metricka data z vasi apliace a vetsiny komponent Vasi infrastruktury a nad temito daty delat grafy (v Grafane) a alerty. Prometheus spada pod CNCF, stejne jako Kubernetes.

### Co Vás naučím
- Uvod do Prometheus ekosystemu
- Instalace Promethea a Alertmanageru
- Exportery
- Konfigurace
- Prace s PROMQL (dotazovaci jazyk promethea)
- Integrace s Grafanou

#### Pro koho je školení určeno
Školení je určeno pro vývojáře a devops, kteří chteji jednoduse a efektivne monitorovat aplikace.`}
    col1={`
#### Předchozí znalosti
- Základy práce s Linuxemm
- Základy práce v terminálu
`}
    col2={`
#### Technické požadavky
- Notebook s pristupem na internet
`}
  />
);
