#!/usr/bin/env python3

_DEFAULT_DEPENDENCIES = [
    "packages/data/**/*",
    "packages/common/**/*",
    "packages/course-landing/**/*",
    "packages/{{site}}/**/*",
    "yarn.lock",
]

_COURSE_LANDING_DEPENDENCIES = [
    "packages/data/training/sessions.yml",
    "packages/data/training/recommendations/**/*",
    "packages/data/training/recommendations/**/*",
    "packages/data/training/pictures/**/*",
    "packages/common/**/*",
    "packages/course-landing/**/*",
    "packages/{{site}}/**/*",
    "yarn.lock",
]

_ONDREJSIKA_THEME_DEPENDENCIES = [
    "packages/data/**/*",
    "packages/common/**/*",
    "packages/ondrejsika-theme/**/*",
    "packages/{{site}}/**/*",
    "yarn.lock",
]


_ONDREJSIKA_SINGLEPAGE_DEPENDENCIES = _ONDREJSIKA_THEME_DEPENDENCIES + [
    "packages/ondrejsika-singlepage/**/*",
]

DEV_SITES = {
    "ondrejsika.io": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "skolenie-ansible.sk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "ondrej-sika.uk": {"dependencies": _ONDREJSIKA_SINGLEPAGE_DEPENDENCIES,},
}
PROD_SITES = {
    "sikalabs.com": {
        "dependencies": {"packages/common/**/*", "packages/{{site}}/**/*", "yarn.lock",}
    },
    "trainera.de": {"dependencies": _ONDREJSIKA_THEME_DEPENDENCIES,},
    "ansible-utbildning.se": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "docker-utbildning.se": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "git-utbildning.se": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "gitlab-utbildning.se": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "kubernetes-utbildning.se": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "ondrej-sika.com": {
        "dependencies": _ONDREJSIKA_THEME_DEPENDENCIES,
        "cloudflare_workers": True,
    },
    "ondrej-sika.cz": {
        "dependencies": _ONDREJSIKA_THEME_DEPENDENCIES,
        "cloudflare_workers": True,
    },
    "ondrej-sika.de": {"dependencies": _ONDREJSIKA_SINGLEPAGE_DEPENDENCIES,},
    "trainera.io": {"dependencies": _ONDREJSIKA_THEME_DEPENDENCIES,},
    "git-training.uk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "docker-training.uk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "kubernetes-training.uk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "ansible-training.uk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "gitlab-training.uk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "ansible-schulung.de": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "ansible-skoleni.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "dockerschulung.de": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "gitlab-ci.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "kubernetes-schulung.de": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skoleni-docker.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skoleni-git.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skoleni-kubernetes.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skolenie-git.sk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skolenie-gitlab.sk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skolenie-docker.sk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skolenie.kubernetes.sk": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "salzburgdevops.com": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "skoleni-terraform.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skoleni-proxmox.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skoleni-prometheus.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "docker-training.de": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "docker-training.ch": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "docker-training.nl": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "docker-training.at": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "git-training.nl": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "skoleni-rancher.cz": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "ondrejsikalabs.com": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "sika-kaplan.com": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "training.kubernetes.is": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "training.kubernetes.lu": {"dependencies": _COURSE_LANDING_DEPENDENCIES,},
    "sika-kraml.de": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "sika-training.com": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "cal-api.sika.io": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "ydo.cz": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "ccc.oxs.cz": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "sika.blog": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "static.sika.io": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "sikahq.com": {"dependencies": _DEFAULT_DEPENDENCIES,},
    "ondrejsika.is": {"dependencies": _ONDREJSIKA_SINGLEPAGE_DEPENDENCIES,},
}

ALL_SITES = {}
ALL_SITES.update(PROD_SITES)
ALL_SITES.update(DEV_SITES)

PRIORITY_SITES = (
    "ondrej-sika.cz",
    "ondrej-sika.com",
    "trainera.io",
    "skoleni.io",
    "trainera.de",
)
SUFFIX = ".panda.k8s.oxs.cz"
with open("sites.txt") as f:
    SITES = list(filter(None, f.read().split("\n")))

out = []
out.append(
    """# Don't edit this file maually
# This file is generated by ./generate-gitlab-ci.py

image: ondrejsika/ci

stages:
  - deploy_dev_priority
  - deploy_prod_priority
  - deploy_dev
  - deploy_prod

variables:
  DOCKER_BUILDKIT: '1'
"""
)


def generate_dependencies(site):
    if site not in ALL_SITES:
        return """      - packages/data/**/*
      - packages/common/**/*
      - packages/course-landing/**/*
      - packages/{{site}}/**/*
      - yarn.lock""".replace(
            "{{site}}", site
        )
    return "\n".join(
        ("      - " + line).replace("{{site}}", site)
        for line in ALL_SITES[site]["dependencies"]
    )


for site in SITES:
    if site in ALL_SITES and ALL_SITES[site].get("cloudflare_workers"):
        pass
    if site in DEV_SITES:
        if ALL_SITES[site].get("cloudflare_workers"):
            pass
        else:
            out.append(
                """
%(site)s dev deploy k8s:
  stage: deploy_dev%(priority_suffix)s
  variables:
    GIT_STRATEGY: none
    KUBECONFIG: .kubeconfig
  script:
    - ./deploy-now-surge.sh ondrej-sika.cz %(site)s
  except:
    - master
  except:
    variables:
      - $EXCEPT_DEPLOY
      - $EXCEPT_DEPLOY_K8S
      - $EXCEPT_DEPLOY_DEV
      - $EXCEPT_DEPLOY_DEV_K8S
  only:
    changes:
%(dependencies)s
  environment:
    name: dev %(site)s
    url: https://%(site)s%(suffix)s
  dependencies: []
"""
                % {
                    "site": site,
                    "name": site.replace(".", "-"),
                    "suffix": SUFFIX,
                    "priority_suffix": "_priority" if site in PRIORITY_SITES else "",
                    "dependencies": generate_dependencies(site),
                }
            )

    if site in PROD_SITES:
        if PROD_SITES[site].get("cloudflare_workers"):
            out.append(
                """
%(site)s prod deploy cloudflare:
  image: node
  stage: deploy_prod%(priority_suffix)s
  script:
    - yarn
    - rm -rf packages/%(site)s/out
    - yarn run deploy-%(site)s
  except:
    variables:
      - $EXCEPT_DEPLOY
      - $EXCEPT_DEPLOY_K8S
      - $EXCEPT_DEPLOY_PROD
      - $EXCEPT_DEPLOY_PROD_K8S
  only:
    refs:
      - master
    changes:
%(dependencies)s
  environment:
    name: prod %(site)s
    url: https://%(site)s
  dependencies: []
"""
                % {
                    "site": site,
                    "suffix": SUFFIX,
                    "name": site.replace(".", "-"),
                    "priority_suffix": "_priority" if site in PRIORITY_SITES else "",
                    "dependencies": generate_dependencies(site),
                }
            )
        else:
            out.append(
                """
%(site)s prod deploy k8s:
  stage: deploy_prod%(priority_suffix)s
  variables:
    GIT_STRATEGY: none
    KUBECONFIG: .kubeconfig
    KUBERNETES_CONTEXT: panda-default
  script:
    - echo $KUBECONFIG_FILECONTENT | base64 --decode > .kubeconfig
    - touch deploy-now.env.sh
    - helm repo add ondrejsika https://helm.oxs.cz
    - ./deploy-now-k8s.sh %(site)s
  except:
    variables:
      - $EXCEPT_DEPLOY
      - $EXCEPT_DEPLOY_K8S
      - $EXCEPT_DEPLOY_PROD
      - $EXCEPT_DEPLOY_PROD_K8S
  only:
    refs:
      - master
    changes:
%(dependencies)s
  environment:
    name: prod %(site)s
    url: https://%(site)s
  dependencies: []
"""
                % {
                    "site": site,
                    "suffix": SUFFIX,
                    "name": site.replace(".", "-"),
                    "priority_suffix": "_priority" if site in PRIORITY_SITES else "",
                    "dependencies": generate_dependencies(site),
                }
            )

with open(".gitlab-ci.yml", "w") as f:
    f.write("".join(out))
