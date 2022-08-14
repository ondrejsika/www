fmt:
	yarn prettier-write

generate-gitlab-ci:
	python3 generate-gitlab-ci.py
	git add .gitlab-ci.yml
	git commit -m "[generated] ci: Update generated .gitlab-ci.yml by generate-gitlab-ci.py" .gitlab-ci.yml

commit-prettier-write:
	git commit -m "[generated] refactor(style): Reformat using Prettier (yarn run prettier-write)"

commit-yarn-lock:
	git add yarn.lock
	git commit -n -m "[generated] Update yarn.lock"

commit-ncu-all:
	git commit -n -m "[generated] yarn run ncu-all - upgrade all dependencies"

update-sessions-yml-from-training-crm:
	curl -o packages/data/training/sessions.yml https://trainingcrm.sika.io/views/sessions_yaml/
	git add packages/data/training/sessions.yml
	slu git if staged && git commit -m "[generated] content(data/training/sessions): Update sessions.yml from Training CRM" || echo No changes

auto-update-sessions-yml-from-training-crm:
	curl -o packages/data/training/sessions.yml https://trainingcrm.sika.io/views/sessions_yaml/
	git add packages/data/training/sessions.yml
	slu git if staged && git commit -m "[auto] content(data/training/sessions): Update sessions.yml from Training CRM" || echo No changes

auto-ncu-update:
	./node_modules/.bin/ncu -t patch -u
	yarn
	git add package.json yarn.lock
	slu git if staged && git commit -m "[auto] deps: Upgrade patch versions of deps using ncu (npm-check-update)" || echo No changes

	./node_modules/.bin/ncu -t minor -u
	yarn
	git add package.json yarn.lock
	slu git if staged && git commit -m "[auto] deps: Upgrade minor versions of deps using ncu (npm-check-update)" || echo No changes

create-follow-up:
ifndef COURSE
	$(error COURSE is undefined)
endif
ifndef DATE
	$(error DATE is undefined)
endif
	./create-follow-up.py --course=$(COURSE) --date $(DATE)

commit-follow-up:
ifndef COURSE
	$(error COURSE is undefined)
endif
ifndef DATE
	$(error DATE is undefined)
endif
	git add packages/ondrej-sika.cz/pages/private/follow-up.js
	git add packages/ondrej-sika.cz/pages/follow-up/
	git commit -m "feat(ondrej-sika.cz/follow-up): Add follow up for: $(COURSE) $(DATE)"

setup-git-hooks:
	rm -rf .git/hooks
	(cd .git && ln -s ../.git-hooks hooks)
