commit-prettier-write:
	git commit -m "[generated] refactor(style): Reformat using Prettier (yarn run prettier-write)"

update-sessions-yml-from-training-crm:
	curl -o packages/data/training/sessions.yml https://trainingcrm.sika.io/views/sessions_yaml/
	git add packages/data/training/sessions.yml
	git commit -m "[generated] Update sessions.yml from Training CRM"


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
