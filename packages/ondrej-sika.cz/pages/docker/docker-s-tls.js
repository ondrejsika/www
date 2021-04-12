import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Docker s TLS"
    ad="docker"
    markdown={`
Pokud chcete používat Docker vzdáleně (ovládat jej z jiného hostu, je téměř nutností zapnout TLS ověřování. Jak to nasadit si ukážeme zde.

## Generování certifikátů

Nejdříve si vygenerujeme SSL certifikáty nástrojem [minica](https://github.com/jsha/minica). Předpokládejme že náš Docker běží na serveru kam je nacílena doména \`docker.sikademo.com\`.

Pokud nemáte \`minica\` můžete jej nainstalovat pomocí \`brew install minica\`

    minica --domains docker.sikademo.com
    scp minica.pem root@docker.sikademo.com:/etc/docker/ca.pem
    scp docker.sikademo.com/cert.pem root@docker.sikademo.com:/etc/docker/cert.pem
    scp docker.sikademo.com/key.pem root@docker.sikademo.com:/etc/docker/key.pem

## Spuštění Dockeru s TLS parametry

Je potřeba spustit Docker s těmito parametry \`--tlsverify --tlscacert=/etc/docker/ca.pem --tlscert=/etc/docker/cert.pem --tlskey=/etc/docker/key.pem -H=0.0.0.0:2376\`. V systemd nastavte tyto parametry ke spouštění Dockeru.

    dockerd \\
      --tlsverify \\
      --tlscacert=/etc/docker/ca.pem \\
      --tlscert=/etc/docker/cert.pem \\
      --tlskey=/etc/docker/key.pem \\
      -H=0.0.0.0:2376

Konfigurační soubor Dockeru v systemd zjistitite tímto příkazem:

    systemctl status docker.service

Vypíše to něco jako:

![systemctl status docker.service](/static/systemctl-status-docker-service.png)

Pak otevřete soubor \`/lib/systemd/system/docker.service\` a přidáte TLS parametry. Poté reloadnete konfiguraci a restartujete Docker.

    vim /lib/systemd/system/docker.service
    systemctl daemon-reload
    systemctl restart docker

## Připojení ke vzdálenému Dockeru

Zkopírujeme si certifikáty do složky \`~/.docker/docker.sikademo.com\`:

    mkdir ~/.docker/docker.sikademo.com
    cp minica.pem ~/.docker/docker.sikademo.com/ca.pem
    cp docker.sikademo.com/cert.pem ~/.docker/docker.sikademo.com/cert.pem
    cp docker.sikademo.com/key.pem ~/.docker/docker.sikademo.com/key.pem

Pro připojení vzdáleného Dockeru můžete použít buď parametry příkazu docker nebo environment variables.

    docker \\
      --tlsverify \\
      --tlscacert=~/.docker/docker.sikademo.com/ca.pem \\
      --tlscert=~/.docker/docker.sikademo.com/cert.pem \\
      --tlskey=~/.docker/docker.sikademo.com/key.pem \\
      -H=tcp://docker.sikademo.com:2376 \\
      version

nebo pomocí proměnných

    export DOCKER_HOST=tcp://docker.sikademo.com:2376
    export DOCKER_CERT_PATH=~/.docker/docker.sikademo.com
    export DOCKER_TLS_VERIFY=1
    docker version
`}
    after={
      <div className="row">
        <div className="col-6">
          <div className="alert alert-success mt-5 text-center" role="alert">
            <h3>Zajímáte se o Docker? Zkuste mé školení Dockeru!</h3>
            <a className="btn btn-large btn-success m-3" href="/skoleni/docker">
              Ukázat školení Dockeru
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="alert alert-primary mt-5 text-center" role="alert">
            <h3>
              Chcete dostávat nové články do emailu? Přihlašte se k newsletteru!
            </h3>
            <a
              className="btn btn-large btn-primary m-3"
              href="https://sika.link/newsletter"
            >
              Přihlásit se k odběru
            </a>
          </div>
        </div>
      </div>
    }
  >
    <style jsx global>{`
      .article img {
        width: 70%;
      }
    `}</style>
  </Article>
);

export default Page;
