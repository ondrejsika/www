IMAGE = ghcr.io/ondrejsika/sikalabs-landing

default: build-and-push

build-and-push:
	make build
	make push

build:
	yarn run static
	docker build --platform linux/amd64 -t ${IMAGE} .

push:
	docker push ${IMAGE}
