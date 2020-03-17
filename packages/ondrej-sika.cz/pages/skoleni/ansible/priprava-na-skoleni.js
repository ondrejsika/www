import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Příprava na Školení Ansible"
    markdown={`
Díky za Váš zájem o školení Ansible.

Na školení Ansible potřebujete:

- Vlastní notebook
- Přístup na internet ideálně __bez korporátní proxy__
- SSH client (budu mít připravené virtuální servery s Ansible)

Pokud chcete používat Ansible z lokálního stroje je potřeba mít nainstalovaný Python 3 a Ansible nainstalované pomocí:

\`\`\`
pip3 install ansible
\`\`\`

Pokud budete mít jakýkoliv problém nebo dotaz, neváhejte napsat na <ondrej@sika.io>
`}
  />
);

export default Page;
