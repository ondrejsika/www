#!/usr/bin/env python3

import json

STATICA_SITES = [
    # CZ course landing pages
    {"name": "skoleni-git.cz"},
    {"name": "skoleni-docker.cz"},
    {"name": "skoleni-kubernetes.cz"},
    {"name": "skoleni-proxmox.cz"},
    {"name": "skoleni-prometheus.cz"},
    {"name": "skoleni-terraform.cz"},
    {"name": "skoleni-git.cz"},
    {"name": "skoleni-rancher.cz"},
    {"name": "gitlab-ci.cz"},
    {"name": "ansible-skoleni.cz"},
    {"name": "skoleni.digitalocean.cz"},
]

STATICA_SITES_DEV = [
    {"name": "ondrejsika.io", "deps": "default"},
    {"name": "skoleni.io", "deps": "default"},
    {"name": "ondrej-sika.cz", "deps": "ondrejsika_theme"},
    {"name": "sikalabs.com", "deps": "ondrejsika_theme"},
    {"name": "ondrej-sika.uk", "deps": "ondrejsika_singlepage"},
]

STATICA_SITES_STATICA_SITES20 = [
    {"name": "digitalocean.cz"},
    {"name": "devopsnews.cz"},
    {"name": "hashicorp.cz"},
    {"name": "devopsaci-landing", "domain": "devopsaci.cz"},
    {"name": "sikahosting.com"},
]

STATICA_SITES_STATICA_SITES20_DEV = [
    {"name": "devopsaci-landing"},
    {"name": "sikalabs-landing"},
    {"name": "devopsaci.cz"},
]

CLOUDFLARE_SITES =  [
    {"name": "trainera.de", "deps": "ondrejsika_theme"},
    {"name": "ondrej-sika.com", "deps": "ondrejsika_theme"},
    {"name": "ondrej-sika.cz", "deps": "ondrejsika_theme"},
    {"name": "ondrej-sika.de", "deps": "ondrejsika_singlepage"},
    {"name": "ondrejsika.is", "deps": "ondrejsika_singlepage"},
    {"name": "trainera.cz", "deps": "ondrejsika_theme"},
    {"name": "skoleni.io", "deps": "default"},
]

DOCKER_SITES =  [
    {"name": "skolenie.kubernetes.sk", "deps": "course_landing"},
    {"name": "training.kubernetes.is", "deps": "course_landing"},
    {"name": "training.kubernetes.lu", "deps": "course_landing"},
    {"name": "cal-api.sika.io", "deps": "default"},
    {"name": "ccc.oxs.cz", "deps": "default"},
    {"name": "sika.blog", "deps": "default"},
    {"name": "static.sika.io", "deps": "default"},
    {"name": "sikahq.com", "deps": "default"},
]

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

_STATICA_SITES20_DEPENDENCIES = [
    "sites20/sites/{{site}}/**/*",
    "sites20/yarn.lock",
]


def gen_deps(deps, name):
    return [dep.replace("{{site}}", name) for dep in deps]


out = {
    "stages": [
        "push-to-github",
        "schedule1",
        "schedule2",
        "deploy",
        "deploy test",
        "deploy validate",
        "docker build and deploy",
        "docker deploy validate",
    ],
    "image": "sikalabs/ci-node",
    "variables": {
        "DOCKER_BUILDKIT": '1',
        "GIT_CLEAN_FLAGS": "-ffdx -e node_modules -e .yarn-cache",
    },
    "push-to-github": {
        "image": "sikalabs/ci",
        "stage": "push-to-github",
        "script": [
            "mkdir -p ~/.ssh",
            "cp $GITHUB_PUSH_SSH_KEY_PRIV ~/.ssh/id_rsa",
            "chmod 700 -R ~/.ssh",
            "ssh-keyscan github.com >> ~/.ssh/known_hosts",
            "git remote add github-$CI_PIPELINE_ID git@github.com:ondrejsika/www.git",
            "git push github-$CI_PIPELINE_ID $CI_COMMIT_SHA:$CI_COMMIT_BRANCH -f",
        ]
    },
    "auto_update_sessions_yml_from_training_crm": {
        "stage": "schedule1",
        "image": "sikalabs/ci",
        "variables": {
            "GIT_AUTHOR_NAME": "SikaLabs CI Bot",
            "GIT_COMMITTER_NAME": "SikaLabs CI Bot",
            "GIT_COMMITTER_EMAIL": "ci-bot@sikalabs.io",
            "GIT_AUTHOR_EMAIL": "ci-bot@sikalabs.io"
        },
        "script": [
            "make auto-update-sessions-yml-from-training-crm",
            "git remote set-url origin https://ci-bot:$GITLAB_TOKEN_CI_BOT@$CI_SERVER_HOST/$CI_PROJECT_PATH.git",
            "git push origin HEAD:$CI_COMMIT_BRANCH"
        ],
        "only": [
            "schedule"
        ]
    },
    "auto_ncu_update": {
        "stage": "schedule2",
        "image": "sikalabs/ci-node",
        "variables": {
            "GIT_AUTHOR_NAME": "SikaLabs CI Bot",
            "GIT_COMMITTER_NAME": "SikaLabs CI Bot",
            "GIT_COMMITTER_EMAIL": "ci-bot@sikalabs.io",
            "GIT_AUTHOR_EMAIL": "ci-bot@sikalabs.io"
        },
        "script": [
            "yarn",
            "make auto-ncu-update",
            "cd sites20 && make auto-ncu-update",
            "git remote set-url origin https://ci-bot:$GITLAB_TOKEN_CI_BOT@$CI_SERVER_HOST/$CI_PROJECT_PATH.git",
            "git push origin HEAD:$CI_COMMIT_BRANCH"
        ],
        "only": [
            "schedule"
        ]
    }
}

for site in CLOUDFLARE_SITES:
    name = site["name"]
    deps = {
        "course_landing": _COURSE_LANDING_DEPENDENCIES,
        "default": _DEFAULT_DEPENDENCIES,
        "ondrejsika_theme": _ONDREJSIKA_THEME_DEPENDENCIES,
        "ondrejsika_singlepage": _ONDREJSIKA_SINGLEPAGE_DEPENDENCIES,
    }[site.get("deps", "course_landing")]
    out.update(
        {
            "deploy %s"
            % name: {
                "stage": "deploy",
                "script": [
                    "yarn --cache-folder .yarn-cache",
                    "rm -rf packages/%s/out" % name,
                    "mkdir -p packages/%s/public/api" % name,
                    'slu static-api version --set-git-clean --set-git-ref $CI_COMMIT_REF_NAME -e CI_PIPELINE_ID=$CI_PIPELINE_ID -e "GITLAB_USER_LOGIN=$GITLAB_USER_LOGIN" -e "CI_COMMIT_TITLE=$CI_COMMIT_TITLE"  > packages/%s/public/api/version.json' % name,
                    "yarn --cache-folder .yarn-cache add @cloudflare/wrangler -W",
                    "yarn run deploy-%s" % name,
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [],
            }
        }
    )
    out.update(
        {
            "validate %s"
            % name: {
                "stage": "deploy validate",
                "script": [
                    "COMMIT=$(curl -fsSL https://%s/api/version.json | jq -r .git_commit)" % name,
                    "[ $COMMIT == $CI_COMMIT_SHA ]",
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [
                    "deploy %s" % name,
                ],
            }
        }
    )


for site in STATICA_SITES:
    name = site["name"]
    deps = {
        "course_landing": _COURSE_LANDING_DEPENDENCIES,
        "default": _DEFAULT_DEPENDENCIES,
        "ondrejsika_theme": _ONDREJSIKA_THEME_DEPENDENCIES,
        "ondrejsika_singlepage": _ONDREJSIKA_SINGLEPAGE_DEPENDENCIES,
    }[site.get("deps", "course_landing")]
    out.update(
        {
            "deploy %s"
            % name: {
                "stage": "deploy",
                "script": [
                    "rm -rf ./sites20/sites/%s/out" % name,
                    "yarn --cache-folder .yarn-cache",
                    "mkdir -p packages/%s/public/api" % name,
                    "slu static-api version --set-git-clean --set-git-ref $CI_COMMIT_REF_NAME  -e CI_PIPELINE_ID=$CI_PIPELINE_ID -e \"GITLAB_USER_LOGIN=$GITLAB_USER_LOGIN\" -e \"CI_COMMIT_TITLE=$CI_COMMIT_TITLE\" > packages/%s/public/api/version.json" % name,
                    "yarn run deploy-%s" % name,
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [],
            }
        }
    )
    out.update(
        {
            "validate %s"
            % name: {
                "stage": "deploy validate",
                "script": [
                    "COMMIT=$(curl -fsSL https://%s/api/version.json | jq -r .git_commit)" % name,
                    "[ $COMMIT == $CI_COMMIT_SHA ]",
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [
                    "deploy %s" % name,
                ],
            }
        }
    )

for site in STATICA_SITES_DEV:
    name = site["name"]
    statica_domain = (
        "test-" + name.replace(".", "-") + "-$CI_COMMIT_REF_SLUG.$STATICA_BASE_DOMAIN"
    )
    out.update(
        {
            "deploy test %s"
            % name: {
                "stage": "deploy test",
                "script": [
                    "rm -rf ./packages/%s/out" % name,
                    "yarn  --cache-folder .yarn-cache",
                    "mkdir -p packages/%s/public/api" % name,
                    "slu static-api version --set-git-clean --set-git-ref $CI_COMMIT_REF_NAME -e CI_PIPELINE_ID=$CI_PIPELINE_ID -e \"GITLAB_USER_LOGIN=$GITLAB_USER_LOGIN\" -e \"CI_COMMIT_TITLE=$CI_COMMIT_TITLE\" > packages/%s/public/api/version.json" % name,
                    "yarn run static-%s" % name,
                    "statica %s ./packages/%s/out" % (statica_domain, name),
                ],
                "only": {
                    "changes": gen_deps(_COURSE_LANDING_DEPENDENCIES, name),
                },
                "needs": [],
                "environment": {
                    "name": "test %s" % name,
                    "url": "https://%s" % statica_domain,
                },
            }
        }
    )

for site in STATICA_SITES_STATICA_SITES20:
    name = site["name"]
    deps = _STATICA_SITES20_DEPENDENCIES
    domain = site.get("domain", name)
    out.update(
        {
            "deploy sites20 %s"
            % name: {
                "stage": "deploy",
                "script": [
                    "mkdir -p sites20/sites/%s/public/api" % name,
                    "slu static-api version --set-git-clean --set-git-ref $CI_COMMIT_REF_NAME -e CI_PIPELINE_ID=$CI_PIPELINE_ID -e \"GITLAB_USER_LOGIN=$GITLAB_USER_LOGIN\" -e \"CI_COMMIT_TITLE=$CI_COMMIT_TITLE\" > sites20/sites/%s/public/api/version.json" % name,
                    "cd sites20",
                    "rm -rf ./sites/%s/out" % name,
                    "yarn --cache-folder .yarn-cache",
                    "yarn run deploy-%s" % name,
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [],
            }
        }
    )
    out.update(
        {
            "validate %s"
            % name: {
                "stage": "deploy validate",
                "script": [
                    "COMMIT=$(curl -fsSL https://%s/api/version.json | jq -r .git_commit)" % domain,
                    "[ $COMMIT == $CI_COMMIT_SHA ]",
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [
                    "deploy sites20 %s" % name,
                ],
            }
        }
    )

for site in STATICA_SITES_STATICA_SITES20_DEV:
    name = site["name"]
    deps = _STATICA_SITES20_DEPENDENCIES
    statica_domain = (
        "test-" + name.replace(".", "-") + "-$CI_COMMIT_REF_SLUG.$STATICA_BASE_DOMAIN"
    )
    out.update(
        {
            "deploy dev sites20 %s"
            % name: {
                "stage": "deploy test",
                "script": [
                    "mkdir -p sites20/sites/%s/public/api" % name,
                    "slu static-api version --set-git-clean --set-git-ref $CI_COMMIT_REF_NAME -e CI_PIPELINE_ID=$CI_PIPELINE_ID -e \"GITLAB_USER_LOGIN=$GITLAB_USER_LOGIN\" -e \"CI_COMMIT_TITLE=$CI_COMMIT_TITLE\" > sites20/sites/%s/public/api/version.json" % name,
                    "cd sites20",
                    "rm -rf ./sites/%s/out" % name,
                    "yarn --cache-folder .yarn-cache",
                    "yarn static-%s" % name,
                    "statica %s ./sites/%s/out" % (statica_domain, name)
                ],
                "only": {
                    "changes": gen_deps(deps, name),
                },
                "needs": [],
            }
        }
    )
    out.update(
        {
            "validate dev %s"
            % name: {
                "stage": "deploy validate",
                "script": [
                    "COMMIT=$(curl -fsSL https://%s/api/version.json | jq -r .git_commit)" % statica_domain,
                    "[ $COMMIT == $CI_COMMIT_SHA ]",
                ],
                "only": {
                    "changes": gen_deps(deps, name),
                },
                "needs": [
                    "deploy dev sites20 %s" % name,
                ],
            }
        }
    )

for site in DOCKER_SITES:
    name = site["name"]
    deps = {
        "course_landing": _COURSE_LANDING_DEPENDENCIES,
        "default": _DEFAULT_DEPENDENCIES,
        "ondrejsika_theme": _ONDREJSIKA_THEME_DEPENDENCIES,
        "ondrejsika_singlepage": _ONDREJSIKA_SINGLEPAGE_DEPENDENCIES,
    }[site.get("deps", "course_landing")]
    out.update(
        {
            "deploy %s"
            % name: {
                "stage": "docker build and deploy",
                "script": [
                    "yarn --cache-folder .yarn-cache",
                    "rm -rf packages/%s/out" % name,
                    "mkdir -p packages/%s/public/api" % name,
                    'slu static-api version --set-git-clean --set-git-ref $CI_COMMIT_REF_NAME -e CI_PIPELINE_ID=$CI_PIPELINE_ID -e "GITLAB_USER_LOGIN=$GITLAB_USER_LOGIN" -e "CI_COMMIT_TITLE=$CI_COMMIT_TITLE"  > packages/%s/public/api/version.json' % name,
                    "yarn run static-%s" % name,
                    "docker login $CI_REGISTRY -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD",
                    "cp ci/docker/* packages/%s/" % name,
                    "docker build --platform linux/amd64 -t $CI_REGISTRY_IMAGE/%s:$CI_COMMIT_SHORT_SHA packages/%s" % (name, name),
                    "rm packages/%s/Dockerfile" % name,
                    "rm packages/%s/nginx-site.conf" % name,
                    "docker push $CI_REGISTRY_IMAGE/%s:$CI_COMMIT_SHORT_SHA" % name,

                    "docker login $CI_REGISTRY -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD",
                    "docker pull $CI_REGISTRY_IMAGE/%s:$CI_COMMIT_SHORT_SHA" % name,
                    "docker tag $CI_REGISTRY_IMAGE/%s:$CI_COMMIT_SHORT_SHA $CI_REGISTRY_IMAGE/%s" % (name, name),
                    "docker push $CI_REGISTRY_IMAGE/%s" % name,
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [],
            }
        }
    )
    out.update(
        {
            "validate %s"
            % name: {
                "stage": "docker deploy validate",
                "script": [
                    "COMMIT=$(curl -fsSL https://%s/api/version.json | jq -r .git_commit)" % name,
                    "[ $COMMIT == $CI_COMMIT_SHA ]",
                ],
                "only": {
                    "refs": [
                        "master",
                        "master-ci",
                    ],
                    "changes": gen_deps(deps, name),
                },
                "needs": [
                    "deploy %s" % name,
                ],
            }
        }
    )


with open(".gitlab-ci.yml", "w") as f:
    f.write(json.dumps(out))
