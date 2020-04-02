import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

export default function Hello() {
  return (
    <Article
      title="Zajímavé osobní stránky"
      markdown={`
Můj seznam zajímavých osobních webů obsahem i formou. Průběžne aktualizuji, naposledy 15. 1. 2020.

- <https://dhh.dk/>
- <http://konupek.cz/>
- <https://www.vrany.dev/>
- <https://zuzjes.com/>
- <https://karmi.cz/>
- <https://sekava.cz/>
- <https://rousek.name/>
- <https://jurco.io/>
- <https://peteramende.de/>
- <https://huvik.dev/>
- <https://sulc.dev/>
- <https://honzacerny.com/>
- <https://mattbanderson.com/about/>
- <https://endler.dev/about/>
- <https://sugarshin.net/>
- <https://nat.github.io/hello/> ([source](https://github.com/nat/hello))
- <https://petrmanek.cz/>

    `}
    />
  );
}
