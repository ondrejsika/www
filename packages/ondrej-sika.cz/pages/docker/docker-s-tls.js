import Article from "@app/ondrej-sika.cz/layouts/Article";

export default () => (
  <Article
    title="Docker s TLS"
    markdown={`
Pokud chcete pouzivat Docker vzdalene (ovladat jej z jineho hostu, je temer nutnosti zapnout TLS overovani. Jak to nasadit si ukazeme zde.

## Generovani certifikatu

Nejdrive si vygenerujeme SSL certifikaty nastrojem [minica](https://github.com/jsha/minica). Predpokladejme ze nas docker bezi na serveru kam je nacilena domena \`docker.sikademo.com\`.

Pokud nemate \`minica\` muzete jej nainstalovat pomoci \`brew install minica\`

    minica --domains docker.sikademo.com
    scp minica.pem root@docker.sikademo.com:/etc/docker/ca.pem
    scp docker.sikademo.com/cert.pem root@docker.sikademo.com:/etc/docker/cert.pem
    scp docker.sikademo.com/key.pem root@docker.sikademo.com:/etc/docker/key.pem

## Spusteni Dockeru s TLS parametry

Je potreba spustit docker s temito parametry \`--tlsverify --tlscacert=/etc/docker/ca.pem --tlscert=/etc/docker/cert.pem --tlskey=/etc/docker/key.pem -H=0.0.0.0:2376\`. V systemd nastavte tyto parametry ke spousteni Dockeru.

    dockerd \\
      --tlsverify \\
      --tlscacert=/etc/docker/ca.pem \\
      --tlscert=/etc/docker/cert.pem \\
      --tlskey=/etc/docker/key.pem \\
      -H=0.0.0.0:2376

Konfiguracni soubor Dockeru v systemd zjistitite timto prikazem:

    systemctl status docker.service

Vypise to neco jako:

![systemctl status docker.service](/static/systemctl-status-docker-service.png)

Pak otevreme soubor \`/lib/systemd/system/docker.service\` a pridate TLS paramtry. Pote reloadnete konfiguraci a restartujete Docker.

    vim /lib/systemd/system/docker.service
    systemctl daemon-reload
    systemctl restart docker

## Pripojeni ke vzdalenemu Dockeru

Zkopirume si certifikaty do slozky \`~/.docker/docker.sikademo.com\`:

    mkdir ~/.docker/docker.sikademo.com
    cp minica.pem ~/.docker/docker.sikademo.com/ca.pem
    cp docker.sikademo.com/cert.pem ~/.docker/docker.sikademo.com/cert.pem
    cp docker.sikademo.com/key.pem ~/.docker/docker.sikademo.com/key.pem

Pro pripojeni vzdaleneho dockeru muzete pouzit bud parametry prikazu docker nebo environment variables.

    docker \\
      --tlsverify \\
      --tlscacert=~/.docker/docker.sikademo.com/ca.pem \\
      --tlscert=~/.docker/docker.sikademo.com/cert.pem \\
      --tlskey=~/.docker/docker.sikademo.com/key.pem \\
      -H=tcp://docker.sikademo.com:2376 \\
      version

nebo pomoci promennych

    export DOCKER_HOST=tcp://docker.sikademo.com:2376
    export DOCKER_CERT_PATH=~/.docker/docker.sikademo.com
    export DOCKER_TLS_VERIFY=1
    docker version
`}
    after={
      <div className="row">
        <div className="col-6">
          <div className="alert alert-success mt-5 text-center" role="alert">
            <h3>Zajimate se o Docker? Zkuste me skoleni Dockeru!</h3>
            <a className="btn btn-large btn-success m-3" href="/skoleni/docker">
              Ukazat skoleni Dockeru
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
      .article-body img {
        width: 70%;
      }
    `}</style>
  </Article>
);
