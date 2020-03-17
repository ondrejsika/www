import Course from "@app/ondrejsika-theme/layouts/Course";
import logo from "@app/data/pictures/courses/git.svg";
import { stripIndent } from "common-tags";

export default props => (
  <Course
    lang={props.site.lang}
    site={props.site}
    location="de"
    course_id="git"
    // show_sessions={true}
    hide_add_to_google_calendar={true}
    course_title="Git"
    logo={logo}
    price_self_funded="399 EUR"
    price_in_house="1300 EUR"
    description={stripIndent`
    ### Was ist Git?
    Git ist als modernes Versionierungswerkzeug mittlerweile der Standard unter Softwareentwicklern.
    Freelancer, Startups und große Konzerne nutzen es täglich.
    Git ermöglicht eine einfache simultane Zusammenarbeit an Projekten, ohne dass man sich in die Quere kommt oder einem der Zugriff auf den aktuellen Stand erschwert wird.
    Die Zusammenarbeit wird durch Gitlab, einer Plattform für Design, Entwicklung und Betrieb von Softwareprojekten, noch weiter verbessert.

    ### Kursbeschreibung
    Der Kurs wird als eintägiger Workshop abgehalten.
    Sie lernen die Vorteile von Git kennen, werden verstehen, wie es funktioniert und warum es keine angemessenen Altenativen gibt.
    Wir zeigen Ihnen alles von der Installation und Einrichtung an, über einfache individuelle Arbeit auf einem Branch bis zu kollektiver Entwicklung
    in mehreren Branches mit verschiedenen Merge Strategien (merge/rebase).
    Die Vor- und Nachteile beider Strategien werden erläutert, damit Sie entscheiden können, welche besser zu Ihren Anforderungen passt.
    Es werden auch Auswege aus unerwartete Situationen wie "Oh, ich habe alle gelöscht" gezeigt.

    ### Stichpunkte
    - Installation und Einrichtung
    - Neues Repository
    - Einfache Git Befehle
    - Arbeit auf einem Branch
    - Arbeit auf mehreren Branches - merge, rebase (Gits Stärke)
    - Arbeit mit remote Repositories
    - Workflow mit Gitlab
    - Wiederherstellung gelöschter Daten aus dem Repository
    - Tipps

    ### Für wen der Kurs bestimmt ist
    Der Kurs ist in erster Linie für Entwickler gedacht, die noch keine Versionierung verwenden oder Git noch nicht benutzen.
    Der Kurs ist auch für jene nützlich, die nicht täglich Code schreiben, etwa DevOps.`}
    col1={stripIndent`
    #### Notwendige Vorkenntnisse
    - Grundlegender Umwang mit der Kommandozeile
    `}
    col2={stripIndent`
    #### Technische Vorraussetzungen
    - Gitinstallation
    - Internetzugang (https) - vorzugsweise ohne Proxy
    `}
    // recommendations={["sit", "vse"]}
    // twitter_recommendations={[
    //   "jan-novotny-docker",
    //   "tomas-ligenza-docker",
    //   "lubos-klokner-docker"
    // ]}
  />
);
