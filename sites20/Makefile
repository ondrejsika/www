auto-ncu-update:
	./node_modules/.bin/ncu -t patch -u
	yarn
	git add package.json yarn.lock
	(cd .. && slu git if staged && git commit -m "[auto] deps(sites20): Upgrade patch versions of deps using ncu (npm-check-update)" || echo No changes)

	./node_modules/.bin/ncu -t minor -u
	yarn
	git add package.json yarn.lock
	(cd .. && slu git if staged && git commit -m "[auto] deps(sites20): Upgrade minor versions of deps using ncu (npm-check-update)" || echo No changes)
