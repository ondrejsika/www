import Course from "@app/ondrej-sika.cz/layouts/Course";

export default props => (
  <Course
    lang={props.site.lang}
    course_title="Školení Terraform"
    logo="/static/terraform-color.png"
    price_self_funded="4 999 CZK"
    price_company_funded="7 999 CZK"
    price_in_house="25 000 CZK"
    description={`
### Co to je Terraform a k čemu se používá?

Terraform je nástroj, který se používá ke správě infrastruktury v cloudu, jak veřejném (AWS, Azure, GCP), tak privátním (OpenStack, VMware vSphere).

Terraform Vám umožní __spravovat infrastruktutru jako kód__, to znamená verzovanou v Gitu, přidávání resources pomocí merge (pull) requestů a mnoho dalších výhod. Infrastrukturu můžete dále nasadit do testovacího prostředé přesně tak, jako je v produkci bez zbytečného úsilí. O všech komponentách máte přehled a můžete predikovat ceny. Konec klikání infrastruktury, zkuste Terraform.

Terraform umožnuje spravat více cloudových providerů současne, zároveň umožnuje pracovat s hibridními cloudy (část v privátním cloudu, část ve veřejném).

### Jak školení probíhá

Školení je formou workshopu, všechno si podrobně vyzkoušíme a vysvětlíme. Ukážeme si jak Terraform pracuje, jak jej používat v teamu a jak jím spravovat infrastukturu. Uděláme si příklad infrastruktury jednoduché aplikace, kde nastavíme vše - od DNS, přez Kubernetes cluster po S3 file storage.

### Co Vás naučím

- Základní koncept Terraformu
- Výhody Terraformu proti Ansible, Puppetu, ...
- Konfigurace Terraformu pro práci v teamu
- Ovládání Terraform CLI
- Úvod do Terraform Configuration Language (HCL)
- Terraform Providers - napojení na cloudy
- Práce s resources v Terraformu
- Terraform moduly
- Best Practice

### Pro koho je školení určeno

Školení je určeno pro DevOps a adminy, kteří chtějí lépe a efektivněji spravovat infrastrukturu. Zároveň také pro vývojáře, kteří se starají o nejakou infrastrukturu v cloudech.
    `}
    col1={`
#### Předchozí znalosti

- Základní znalost veřejných cloudů (AWS, Digital Ocean, Azure, ...)
- Základy práce v terminálu
`}
    col2={`
#### Technické požadavky

- [Nainstalovaný Terraform](/terraform/instalace)
- Přístup na internet (ideálně bez korporatni proxy)
- Vlastní účet v Digital Oceanu výhodou - [Registrace + 50 USD kredit](https://sika.link/do-ref)
`}
  />
);
