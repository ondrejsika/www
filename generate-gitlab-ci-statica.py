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

out = {
    "stages": ["deploy"],
    "image": "ondrejsika/ci-node-statica",
    "variables": {
        "GIT_CLEAN_FLAGS": "-ffdx -e node_modules",
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
                    "yarn",
                    "yarn run deploy-%s" % name,
                ],
            }
        }
    )

with open(".gitlab-ci-statica.generated.yml", "w") as f:
    f.write(json.dumps(out))
