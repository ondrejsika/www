#!/usr/bin/env python3

import json

SITES = [
    {"name": "skoleni-git.cz"},
    {"name": "skoleni-docker.cz"},
    {"name": "skoleni-kubernetes.cz"},
    {"name": "skoleni-proxmox.cz"},
    {"name": "skoleni-prometheus.cz"},
    {"name": "skoleni-terraform.cz"},
    {"name": "skoleni-git.cz"},
    {"name": "skoleni-rancher.cz"},
]

SITES_DEV = [
    {"name": "skoleni.io"},
    {"name": "ondrej-sika.cz"},
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


def gen_deps(deps, name):
    return [dep.replace("{{site}}", name) for dep in deps]


out = {
    "stages": [
        "start",
        "deploy",
        "deploy test",
    ],
    "image": "ondrejsika/ci-node-statica",
    "variables": {
        "GIT_CLEAN_FLAGS": "-ffdx -e node_modules",
    },
    "start": {
        "stage": "start",
        "script": 'echo "start job - you can\'t create empty child pipeline"',
    },
}

for site in SITES:
    name = site["name"]
    out.update(
        {
            "deploy %s"
            % name: {
                "stage": "deploy",
                "script": [
                    "rm -rf ./packages/%s/out" % name,
                    "yarn",
                    "yarn run deploy-%s" % name,
                ],
                "only": {
                    "changes": gen_deps(_COURSE_LANDING_DEPENDENCIES, name),
                },
                "needs": [],
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
                    "yarn",
                    "yarn run static-%s" % name,
                    "statica %s ./packages/%s/out" % (statica_domain, name),
                ],
                "only": {
                    "changes": gen_deps(_COURSE_LANDING_DEPENDENCIES, name),
                },
                "needs": [],
            }
        }
    )

with open(".gitlab-ci-statica.generated.yml", "w") as f:
    f.write(json.dumps(out))
