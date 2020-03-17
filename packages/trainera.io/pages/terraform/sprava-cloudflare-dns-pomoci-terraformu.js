import Article from "@app/ondrejsika-theme/layouts/Article";
import { TreeTransformer } from "terser";

export default () => (
  <Article
    title="Sprava Cloudflare DNS pomoci Terraformu"
    add="terraform"
    markdown={`
Kazdy kdo delal neco okolo webu se setkal vice ci mene se spravou DNS. Pokud pouzivate DNS servery od registratora domeny, prace s nim byva strasna. Pokud pouzivate Cloudflare (nebo nejakeho cloud providera jako AWS, Azure, DigitalOcean) byva prace s DNS o dost prijemnejsi. My si vsak ukazeme ze DNS zaznamy muzete mit prehledne v souboru a verzovane Gitem diky [Terraformu](/terraform).

Terraform predstavim jen kratce, je to nastroj na spravu infrastruktury, vetsinou na public cloudech. Popis infrastruktury je deklarativni a drzi si stav, diky kteremu je schopen ruzne resources lepe upravovat a mazat. Terraform pouziva pro kofiguraci HCL (Hasicorp Language). Navod na syntaxy je na <https://www.terraform.io/docs/configuration/syntax.html>.

Pustme se ale do Terraformu s Cloudflare.  Nejdrive musime propojit Terraform s Cloudflare. Vytvorime soubor \`terraform.tf\` a nastavime Cloudflare email a token. Idelane formou promennych, ktere muzete zadat pri spousteni a nebo v souboru \`terraform.tfvars\`, ktery ignorujete v Gitu.

\`\`\`
// terrfaform.tf
variable "cloudflare_email" {}
variable "cloudflare_token" {}

provider "cloudflare" {
  email = "\${var.cloudflare_email}"
  token = "\${var.cloudflare_token}"
}
\`\`\`

Do souboru \`terrfaform.tfvars\` nastavte Cloudflare email a token.

\`\`\`
// terrfaform.tfvars (git ignored)
cloudflare_email = "xxx"
cloudflare_token = "xxx"
\`\`\`

Pro pridani domeny do Cloudflare musite pridat resource \`cloudflare_zone\`, ktery definuje zonu domeny - prida domenu do Cloudflare uctu. Do souboru \`terraform.tf\` pridejte:

\`\`\`
resource "cloudflare_zone" "sika_io" {
  zone = "sika.io"
}
\`\`\`

Jeste chci nastavit SSL mode (zalezitost Cloudflare proxy) a automaticke presmerovani HTTP na HTTPS. Pro tyto nastaveni musim pridat resource \`cloudflare_zone_settings_override\`.

\`\`\`
resource "cloudflare_zone_settings_override" "sika_io" {
  name = "\${cloudflare_zone.sika_io.zone}"
  settings {
    automatic_https_rewrites = "on"
    ssl = "full"
  }
}
\`\`\`

Pro pridani jednotlivych zaznamu, pouzijte resource \`cloudflare_record\`. Ukazka jak nasmerovat domenu sika.io na 11.22.33.44 a odkazovat www.sika.io na sika.io. Zaroven chceme skryt nas server za Cloudflare proxy, proto pouzijeme \`proxy=true\`.

\`\`\`
resource "cloudflare_record" "root_oxs_cz" {
  domain = "\${cloudflare_zone.sika_io.zone}"
  name   = "@"
  value  = "11.22.33.44"
  type   = "A"
  proxied = true
}

resource "cloudflare_record" "root_oxs_cz" {
  domain = "\${cloudflare_zone.sika_io.zone}"
  name   = "@"
  value  = "11.22.33.44"
  type   = "A"
  proxied = true
}
\`\`\`

Jeste napriklad chceme pridat Google MX, pridame tedy tyto resources:

\`\`\`
resource "cloudflare_record" "mx0_sika_io" {
  domain   = "\${cloudflare_zone.sika_io.zone}"
  name     = "@"
  value    = "aspmx.l.google.com"
  type     = "MX"
  priority = "1"
}

resource "cloudflare_record" "mx1_sika_io" {
  domain   = "\${cloudflare_zone.sika_io.zone}"
  name     = "@"
  value    = "alt1.aspmx.l.google.com"
  type     = "MX"
  priority = "5"
}

resource "cloudflare_record" "mx2_sika_io" {
  domain  = "\${cloudflare_zone.sika_io.zone}"
  name     = "@"
  value    = "alt2.aspmx.l.google.com"
  type     = "MX"
  priority = "5"
}
\`\`\`

Ted mame vse hotovo, pokud chcete naaplikovat nastaveni z teto konfigurace, muzete z terminalu zavolat:

\`\`\`
terraform apply
\`\`\`

a on Vam ukaze co chce zmenit, musite napsat \`yes\` a Terraform Vam konfiguraci nasadi. Pokud budete chtit neco zmenit, pouze upravte konfiguraci a nebo pridejte dalsi resource a znovu zavolejte \`terraform apply\`, Terraform vam zase upravi konfiguraci podle teto definice (bez nutnosti znalosti predchoziho stavu).

Jeste jedno upozorneni na zaver, Terraform vygenereuje soubory \`terraform.tfstate\` a \`terraform.tfstate.backup\`. Tyto soubory jsou dulezite, doporucuji je pro jednoduchost verzovat v Gitu, ale jsou lepsi zpusoby, jak s nimi pracovat.
`}
    after={
      <div className="alert alert-success mt-5 text-center" role="alert">
        <h2>Zajimate se o Terraform? Zkuste me skoleni Terraformu!</h2>
        <a className="btn btn-large btn-success m-3" href="/skoleni/terraform">
          Ukazat skoleni Terraformu
        </a>
      </div>
    }
  />
);
