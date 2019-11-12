import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    course_id="ansible"
    show_sessions={true}
    lang={props.site.lang}
    course_title="Školení Ansible"
    logo="/static/ansible.png"
    price_self_funded="5 999 CZK"
    price_company_funded="7 999 CZK"
    price_in_house="25 000 CZK"
    location="cz"
    description={`
### K čemu se používá?

Ansible je nástroj na hromadnou správu konfiguraci a nasazování. Vy deklarujete vysledný stav serveru a služeb a Ansible se postará o provedení. Nemusíte řešit v jakém stavu je server nebo aplikace ted, Ansible vám zařídí požadovaný výsedek (výhoda deklarativní syntaxe, napřiklad shell script je imperativní - proveď to a to ...). Veškerou konfiguraci máte verzovanou Gitem a nestane se vám, ze ztratíte přehled, kde máte co nasazené nebo ze vynecháte nějaký důležitý krok. Ansible vám pomůže nasazovat aplikace a spravovat servery rychleji a bezpečněji.

### Jak školení probíhá

Ansible si společně nainstalujeme a popíšeme si jak pracuje a základní koncepty. Zkusíme si nastavit server (testovací na DigitalOceanu) a nasadit aplikaci od začátku až do konce. Vše si prakticky ošaháme a ozkoušíme.

### Co Vás naučím

- Základní koncept Ansible
- Instalace Ansible (pro ty kteří nenainstalovali doma)
- Základní ovládání Ansible
- Playbooks
- Moduly
- Šablony
- Secrets

### Pro koho je školení určeno

Školení je převážně určeno adminum a DevOps, kteří chtějí začít Ansible používat. Zároveň je vhodné i pro vývojáře, kteří občas nasazují (i do testovacích prostředí) svoje aplikace a chtějí zjednodušit tento proces.
`}
    col1={`
#### Předchozí znalosti

- Základy práce s Linuxemm
- Základy práce v terminálu
`}
    col2={`
#### Technické požadavky

- Nainstalovaný Ansible
- Přístup na internet (ideálně bez korporatni proxy, případně nastavenou proxy v Dockeru)
`}
    recommendations={["oxy", "oxyCTO"]}
  />
);
