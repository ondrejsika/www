import Course from "@app/ondrej-sika.cz/layouts/Course";
import docker_img from "@app/data/pictures/courses/docker.svg";
import { stripIndent } from "common-tags";

export default props => (
  <Course
    lang={props.site.lang}
    site={props.site}
    location="de"
    course_id="kubernetes"
    show_sessions={true}
    hide_add_to_google_calendar={true}
    course_title="Kubernetes Schulungen"
    logo={docker_img}
    price_self_funded="799 EUR"
    price_in_house="2600 EUR"
    description={stripIndent`
    ### Die Technologie
    Kubernetes ist heutzutage die an weitesten verbreitete Plattform zum Hosten von Docker Containern. Es wird von allen großen Spielern auf dem Markt (Google, Amazon, Microsoft) über die Cloud Native Computing Foundation unterstützt. Kuberneres wird von Unternehmen jeder Größenordnung produktiv eingesetzt - vom Startup bis zum Weltkonzern.

    ### Kursbeschreibung
    Der Kurs hat die Form eines praktischen Hands-On-Workshops. Wir werden Kuberneres sowohl lokal (zum Entwickeln), als auch in der Cloud bei Digital Ocean aufsetzen. Nachdem wir uns eine Übersicht über die Grundstruktur verschafft haben, gehen wir die einzelnen Komponenten der Plattform durch. Wir lernen, wie man ein Kubernetes Manifest schreibt und wie man eine Dockeranwendung deployt. Des Weiteren sehen wir uns an, wie man in Kubernetes Rechte verwaltet und wie man Helm-Pakete schreibt und nutzt.

    ### Ondrej Sika (englisch)

    My name is Ondřej Šika, I develop software at Slush Pool and hold workshops.
    I've held Kubernetes workshops at companies like CGI or Webglobe - Yergeon.
    I mostly teach Docker which is very closely related to Kubernetes.

    Kubernetes is the platform of choice for most of my projects, as it's one of the easiest ways of running Docker applications.

    ### Inhalt
    - Theoretische Einführung in Kubernetes
    - Installation von Minikube und kubectl (für die, die es nicht schon zu Hause installiert haben)
    - Beschreibung der Kubernetes Komponenten
    - Deployment in Kubernetes
    - Rechteverwaltung im Kubernetes Cluster
    - Theoretische Einführung in Helm Pakete
    - Installation und Deployment mit Helm
    - Schreiben eingener Helm Pakete

    #### Für wen die Schulung geeignet ist
    Die Schulung richtet sich an Entwickler und DevOps-Ingenieure, die ihre Dockeranwendungen in Kubernetes laufen lassen wollen.`}
    col1={stripIndent`
    #### Vorkenntnisse
    - [Dockergrundlagen](/schulung/docker)
    - Linuxgrundkenntnisse
    - Grundlagen des Umgangs mit der Kommandozeile
    `}
    col2={stripIndent`
    #### Technische Voraussetzungen
    - Vorinstalliertes Docker Desktop
    - Internetzugang - idealerweise ohne Proxy (bzw. mit korrekter Einstellung in Docker Desktop)
    `}
    // recommendations={["sit", "vse"]}
    // twitter_recommendations={[
    //   "jan-novotny-docker",
    //   "tomas-ligenza-docker",
    //   "lubos-klokner-docker"
    // ]}
  />
);
