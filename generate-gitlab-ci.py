#!/usr/bin/env python3

import json

SITES = [
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

SITES_DEV = [
    {"name": "ondrejsika.io", "deps": "default"},
    {"name": "skoleni.io", "deps": "default"},
    {"name": "ondrej-sika.cz", "deps": "ondrejsika_theme"},
    {"name": "sikalabs.com", "deps": "ondrejsika_theme"},
    {"name": "ondrej-sika.uk", "deps": "ondrejsika_singlepage"},
]

SITES_SITES20 = [
    {"name": "digitalocean.cz"},
    {"name": "devopsnews.cz"},
    {"name": "hashicorp.cz"},
    {"name": "devopsaci-landing", "domain": "devopsaci.cz"},
    {"name": "sikahosting.com"},
]

SITES_SITES20_DEV = [
    {"name": "devopsaci-landing"},
    {"name": "devopsaci.cz"},
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

_SITES20_DEPENDENCIES = [
    "sites20/sites/{{site}}/**/*",
    "sites20/yarn.lock",
]


def gen_deps(deps, name):
    return [dep.replace("{{site}}", name) for dep in deps]


out = {
    "stages": [
        "start",
        "deploy",
        "deploy test",
        "deploy validate",
    ],
    "image": "sikalabs/ci-node",
    "variables": {
        "GIT_CLEAN_FLAGS": "-ffdx -e node_modules -e .yarn-cache",
    },
    "start": {
        "stage": "start",
        "script": 'echo "start job - you can\'t create empty child pipeline"',
    },
}

for site in SITES:
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

for site in SITES_DEV:
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

for site in SITES_SITES20:
    name = site["name"]
    deps = _SITES20_DEPENDENCIES
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

for site in SITES_SITES20_DEV:
    name = site["name"]
    deps = _SITES20_DEPENDENCIES
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

with open(".gitlab-ci.yml", "w") as f:
    f.write(json.dumps(out))
