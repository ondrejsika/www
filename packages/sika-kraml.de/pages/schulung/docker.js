import Course from "@app/ondrejsika-theme/layouts/Course";
import docker_img from "@app/data/pictures/courses/docker.svg";
import { stripIndent } from "common-tags";

export default props => (
  <Course
    lang={props.site.lang}
    site={props.site}
    location="de"
    course_id="docker"
    show_sessions={true}
    hide_add_to_google_calendar={true}
    course_title="Docker Schulungen"
    logo={docker_img}
    price_self_funded="799 EUR"
    price_in_house="2600 EUR"
    description={stripIndent`
    ### Die Technologie
    Docker ist eine Technologie, die die Entwicklungs- und Testprozesse stark vereinfacht. Betreiben Sie was Sie wollen und wo Sie es wollen. Warten Sie nicht mehr, bis Ihr Server konfiguriert oder ein Update durchgeführt ist. Verwalten Sie Ihre Luafzeitumgebung als Teil Ihres Projekts.

    ### Course Description
    During the two-day workshop, you’ll be shown everything you need to know to be able to use Docker - from creating a custom container image to the Swarm utilisation. This course is very hands-on, and you will be able to practice everything you learn.

    ### Schulungsleiter
    #### Ondrej Sika (englisch)

    My name is Ondřej Šika, I develop software at Slush Pool and hold workshops. I mostly teach Docker and Gitlab CI, which is closely related to Docker.
    I have over four years of commercial experience with Docker. I use it daily, both for development and production. I can't image working without it.

    #### Jiri Kraml (deutsch)

    Ich heiße Jiří Kraml und bin der Entwicklungsleiter bei Zigpos. Ob fürs Testing  oder Deployment - Docker ist stets eins der ersten Tools, die ich installiere. Die Reproduzierbarkeit von Prozessen hat uns schon so manchen Wochenendeinsatz erspart, denn mit Docker gehören Ausreden à la  "runs on my machine" der Vergangenheit an.

    ### Inhalt
    - Theoretische Einführung in Dockeru
    - Installation von Dockeru (für die, die es nicht schon zu Hause installiert haben)
    - Umgang mit containern
    - Umgang mit Images
    - Docker Compose - Mehrcontaineranwendungen in Docker
    - Deployment in Swarm
    - Demo eines Kubernetesdeployments

    ### Für wen die Schulung geeignet ist
    Die Schulung ist vorranging für Teilnehmer gedacht, die mit Docker keine oder nur geringe Erfahrungen gemacht haben. Vorkenntnisse von Docker sind nicht nötig. Die Schulung ist für Entwickler, DevOps und Administratoren geeignet, die Docker in der Praxis nutzen wollen oder mehr über die Möglichkeiten und Einsatzgebiete von Docker erfahren möchten.`}
    col1={stripIndent`
    #### Vorkenntnisse
    - Linuxgrundlagen
    - Grundlagen des Umgangs mit der Kommandozeile
    `}
    col2={stripIndent`
    #### Technische Voraussetzungen
    - Installiertes [Docker](/docker/instalation)
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
