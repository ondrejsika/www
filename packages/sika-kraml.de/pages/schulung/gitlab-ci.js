import Course from "@app/ondrej-sika.cz/layouts/Course";
import logo from "@app/data/pictures/courses/gitlab-ci.svg";
import { stripIndent } from "common-tags";

export default props => (
  <Course
    lang={props.site.lang}
    site={props.site}
    location="de"
    course_id="gitlab-ci"
    show_sessions={true}
    hide_add_to_google_calendar={true}
    course_title="Gitlab CI"
    logo={logo}
    price_self_funded="399 EUR"
    price_in_house="1300 EUR"
    description={stripIndent`
    ### Die Technologie
    Continuous Integration (kurz CI oder CI/CD) ist ein Werkzeug, welches es Ihnen ermöglicht,
    Routineaufgaben wie das Ausführen von Tests, Messungen der Codequalität oder das Durchführen von Deployments zu automatisieren.
    Es ermöglicht Ihnen eine schnellere Integration neuer Features und schnellere Deployments.
    Der Vorteil von Gitlab CI ist eine sehr gute Dockerunterstützung,
    Sie können sehr leicht Dockerimages bauen oder Tests in Containern ausführen.

    ### Kursbeschreibung
    Wir beginnen den Workshop mit einem Überblick der Vorteile von Continuous Integration
    und erkunden danach die Features und Möglichkeiten von Gitlab CI.
    Anschließend schreiben wir für ein Beispielprojekt ein vollständiges CI-Skript mitsamt Build-, Test- und Deploymentjobs.

    ### Lecturer
    #### Ondrej Sika (englisch)

    My name is Ondřej Šika, I develop software at Slush Pool and hold workshops.
    The Gitlab CI workshop is second in popularity only to Docker, to which it is closely related.
    I have worked with Gitlab CI in many different projects and companies.
    I use it on almost all the projects I work on.
    Gitlab CI makes my work easier and more productive,
    I don't have to care about routine tasks like deployments and building - instead, I can focus on creating value.

    #### Jiri Kraml (deutsch)

    Ich heiße Jiří Kraml und bin der Entwicklungsleiter bei der ZIGPOS GmbH.
    Ich bin seit Jahren intensiver Gitlab CI Nutzer und kann es nur weiterempfehlen - die Zeitersparnis,
    die Zuverlässigkeit unserer Deployments und die Dokumentation unserer Prozesse sind für mich unersetzbar.

    ### Inhalt
    - Allgemeine Einführung in CI
    - Einführung in Gitlab CI
    - Installation des Gitlab CI Runners
    - Umgang mit CI Jobs
    - Erstellung von CI Pipelines
    - Automatische Deployments
    - Docker und CI

    ### Für wen die Schulung geeignet ist
    Die Schulung ist vorranging für Entwickler gedacht,
    die bereits Gitlab nutzen und mit Gitlab CI anfangen wollen.
    Gleichzeitig kann Gitlab CI auch der Grund für den Umstieg auf Gitlab sein.
    Die Schulung ist auch für Ops/DevOps interessant, um Deployments zu vereinfachen.`}
    col1={stripIndent`
    #### Vorkenntnisse
    - Linuxgrundlagen
    - Grundlagen des Umgangs mit der Kommandozeile
    - Gitkenntnisse sind von Vorteil - [Git](/schulung/git)
    - Besuch der Gitlabschulung ist ebenfalls von Vorteil
    `}
    col2={stripIndent`
    #### Technische Voraussetzungen
    - Internetzugang - idealerweise ohne Proxy
    `}
    // recommendations={["sit", "vse"]}
    // twitter_recommendations={[
    //   "jan-novotny-docker",
    //   "tomas-ligenza-docker",
    //   "lubos-klokner-docker"
    // ]}
  />
);
