import Course from "@app/ondrej-sika.cz/layouts/Course";
import logo from "@app/data/pictures/courses/ansible-w.svg";
import { stripIndent } from "common-tags";

export default props => (
  <Course
    lang={props.site.lang}
    site={props.site}
    location="de"
    course_id="ansible"
    // show_sessions={true}
    hide_add_to_google_calendar={true}
    course_title="Ansible Schulungen"
    logo={logo}
    price_self_funded="399 EUR"
    price_in_house="1300 EUR"
    description={stripIndent`
    ### Was ist Ansible?
    Ansible ermöglicht eine deklarative Beschreibung von Serverkonfigurationen und Deploymentprozessen.
    Sie beschreiben den gewünschten Zielzustand und Ansible erledigt den Rest.
    Dadurch behalten Sie stets die Übersicht und vergessen keine kritischen Prozessschritte.
    Zudem lässt sich die textbasierte Konfiguration hervorragend mit Git versionieren.
    Ansible hilft Ihnen, Anwendung schneller zu deployen und Server sicherer zu administieren.

    ### Kursbeschreibung
    Der Kurs wird als zweitägiger Workshop abgehalten, damit Sie das Gelernte auch gleich praktisch ausprobieren können.
    Wir installieren Ansible und erläutern die grundlegenden Konzepte.
    Wir werden sehen, wie man einen Server konfiguriert (eine Test-VM bei DigitalOcean) und deployen eine Anwendung von Anfang bis Ende.
    Dies beinhaltet die Installation von Systempaketen, das Runterladen der Anwedung mit Git,
    das Erstellen von Konfiurationsdateien aus Templates und das einrichten von Credential (z.B. Passwörtern).
    Nach diesem Kurs werden Sie in der Lage sein, Ansible im täglichen Betrieb zu nutzen und Ihre Konfigurations- und Deploymentvorgänge zu vereinfachen.

    ### Stichpunkte
    - Einführung in die Automatisierung
    - Einführung in Ansible
    - Ansible Installation (für jene, die es nicht schon vorher installiert haben)
    - Grundlegende Bedienung von Ansible
    - Playbooks
    - Templates
    - Secrets
    - Eigene Module schreiben
    - Ansible & CI/CD (Gitlab CI)

    ### Für wen der Kurs bestimmt ist
    Der Kurs ist in erster Linie für Admins und DevOps gedacht, die in Ansible einsteigen wollen.
    Entwickler, die ihre eigenen Anwendungen deployen (auch in Testumgebungen) und diesen Vorgang vereinfachen wollen,
    werden diesen Kurs ebenfalls nützlich finden.`}
    col1={stripIndent`
    #### Notwendige Vorkenntnisse
    - Grundlagenwissen Linux
    - Vertrautheit mit der Kommandozeile
    `}
    col2={stripIndent`
    #### Technische Vorraussetzungen
    - Ansibleinstallation, Anleitung [hier](/ansible/instructions)
    - Internetzugang (https, ssh) - vorzugsweise ohne Proxy
    `}
    // recommendations={["sit", "vse"]}
    // twitter_recommendations={[
    //   "jan-novotny-docker",
    //   "tomas-ligenza-docker",
    //   "lubos-klokner-docker"
    // ]}
  />
);
