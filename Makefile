fmt:
	yarn prettier-write

generate-gitlab-ci:
	python3 generate-gitlab-ci.py
	git add .gitlab-ci.yml
	git commit \
		--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
		-m "[generated] ci: Update generated .gitlab-ci.yml by generate-gitlab-ci.py" \
		-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
		.gitlab-ci.yml

commit-prettier-write:
	git commit \
		--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
		-m "[generated] refactor(style): Reformat using Prettier (yarn run prettier-write)" \
		-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>"

commit-yarn-lock:
	git add yarn.lock
	git commit -n \
		--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
		-m "[generated] Update yarn.lock" \
		-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>"

commit-ncu-all:
	git commit -n \
		--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
		-m "[generated] yarn run ncu-all - upgrade all dependencies" \
		-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>"

update-sessions-yml-from-training-crm:
	curl -o packages/data/training/sessions.yml https://trainingcrm.sika.io/views/sessions_yaml/
	git add packages/data/training/sessions.yml
	slu git if staged && \
		git commit \
			--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			-m "[generated] content(data/training/sessions): Update sessions.yml from Training CRM" \
			-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			|| echo No changes

auto-update-sessions-yml-from-training-crm:
	curl -o packages/data/training/sessions.yml https://trainingcrm.sika.io/views/sessions_yaml/
	git add packages/data/training/sessions.yml
	slu git if staged && \
		git commit \
			--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			-m "[auto] content(data/training/sessions): Update sessions.yml from Training CRM" \
			-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			|| echo No changes

auto-ncu-update:
	./node_modules/.bin/ncu -t patch -u
	yarn
	git add package.json yarn.lock
	slu git if staged && \
		git commit \
			--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			-m "[auto] deps: Upgrade patch versions of deps using ncu (npm-check-update)" \
			-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			|| echo No changes

	./node_modules/.bin/ncu -t minor -u
	yarn
	git add package.json yarn.lock
	slu git if staged && \
		git commit \
			--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			-m "[auto] deps: Upgrade minor versions of deps using ncu (npm-check-update)" \
			-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
			|| echo No changes

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
	git commit \
		--author "SikaLabs[bot] <sikalabsbot@sikalabs.com>" \
		-m "feat(ondrej-sika.cz/follow-up): Add follow up for: $(COURSE) $(DATE)" \
		-m "Co-Authored-By: SikaLabs[bot] <sikalabsbot@sikalabs.com>"

setup-git-hooks:
	rm -rf .git/hooks
	(cd .git && ln -s ../.git-hooks hooks)
