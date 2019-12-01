import Course from "@app/ondrej-sika.cz/layouts/Course";
import logo from "@app/data/pictures/courses/proxmox-white.svg";

export default props => (
  <Course
    lang={props.site.lang}
    course_id="proxmox"
    show_sessions={true}
    course_title="Školení Proxmox"
    logo={logo}
    price_self_funded="11 999 CZK"
    price_company_funded="14 999 CZK"
    price_in_house="50 000 CZK"
    location="cz"
    description={`
### Co je to Proxmox

Proxmox je open source nastavba KVM Virtualizace a LXC kontejneru. Prinasi enterprise virtualizaci a jednoduchou spravu virtualnich stroju a kontejneru na leta provereny virtualizacni stack na Linuxu.

### Jak školení probíhá

Na školení probiha formou workshopu, vse si prakticky vyzkousime. Od instalace Proxmox serveru, po nastaveni HA pro virtualni servery.

### Co Vás naučím

- Uvod do Virtualizace, Kontejnerizace a Proxmoxu
- Nastaveni Proxmoxu
- Nastaveni storage
- Prace s KVM virtualnimy servery
- Prace s LXC kontejnery (lightweight virtualizace)
- Backup, restore
- Migrace a HA

### Pro koho je školení určeno

Školení je primárně určeno administratorum, kteří nemají s virtualizaci a Proxmoxem zadne nebo jen male zkusenosti.
`}
    col1={`
#### Předchozí znalosti

Zakladni znalost administrace Linuxu.
`}
    col2={`
#### Technické požadavky

Notebook s pristupem na internet. Nic vic neni potreba. Pokud mate nejaky testovaci Proxmox, muzete vyuzivat ten, ale pro absolvovani kurzu neni potreba.
`}
    // recommendations={["sit", "vse"]}
    // twitter_recommendations={[
    //   "jan-novotny-docker",
    //   "tomas-ligenza-docker",
    //   "lubos-klokner-docker"
    // ]}
  />
);
