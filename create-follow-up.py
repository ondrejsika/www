#!/usr/bin/env python3

import argparse
import datetime
import sys


COURSES = (
    "gitlab-ci",
    "docker",
    "kubernetes",
)
TEMPLATE_FILE = "packages/ondrej-sika.cz/pages/follow-up/template-{course}.js"
OUTPUT_FILE = "packages/ondrej-sika.cz/pages/follow-up/{date}-{course}.js"
INDEX_FILE = "packages/ondrej-sika.cz/pages/private/follow-up.js"
INDEX_LINE_PLACEHOLDER = (
    "<!--- PLACEHOLDER FOLLOW_UP_LINK (for create-follow-up.py script) --->"
)
INDEX_LINE_TEMPLATE = (
    INDEX_LINE_PLACEHOLDER + "\n- [{course}, {date}](/follow-up/{date}-{course})"
)


def valid_date(s):
    try:
        return datetime.datetime.strptime(s, "%Y-%m-%d")
    except ValueError:
        msg = "Not a valid date: '{0}'.".format(s)
        raise argparse.ArgumentTypeError(msg)


def valid_course(s):
    if s in COURSES:
        return s
    raise argparse.ArgumentTypeError("Not a valid course: '{0}'.".format(s))


root_parser = argparse.ArgumentParser()
root_parser.add_argument(
    "--course",
    required=True,
    type=valid_course,
)
root_parser.add_argument(
    "--date",
    required=True,
    help="format YYYY-MM-DD",
    type=valid_date,
)

args = root_parser.parse_args()

template_file = TEMPLATE_FILE.format(course=args.course)
output_file = OUTPUT_FILE.format(
    date=args.date.strftime("%Y-%m-%d"), course=args.course
)

# Create follow up page

with open(template_file, "r") as f:
    template = f.read()

output = template.replace("%%%DATE_HUMAN%%%", args.date.strftime("%d. %m. %Y"))

with open(output_file, "w") as f:
    f.write(output)

# Add page to follow up index

with open(INDEX_FILE, "r") as f:
    index = f.read()

if (
    not "/follow-up/{date}-{course}".format(
        date=args.date.strftime("%Y-%m-%d"), course=args.course
    )
    in index
):

    output = index.replace(
        INDEX_LINE_PLACEHOLDER,
        INDEX_LINE_TEMPLATE.format(
            date=args.date.strftime("%Y-%m-%d"), course=args.course
        ),
    )

    with open(INDEX_FILE, "w") as f:
        f.write(output)
