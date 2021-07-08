# Makefile

DENO_VER = v1.11.5
DENO_DIR = /dev-env/deno_linux_x64-$(DENO_VER)

DOCKER = docker
CONTAINER = ubuntu:18.04
RUN = $(DOCKER) run -it -v "$(PWD)$(DENO_DIR):/bin/deno" -v "$(PWD)/dev-env/cache:/root/.cache/deno" -v "$(PWD)/src:/data" -w /data  $(CONTAINER)


default: run


.PHONY: help
help:
	@echo "Usage: make [dev|test|run]"
	@echo "\t dev    Enter dev environment"
	@echo "\t test   Run tests"
	@echo "\t run    Run program"
	

.PHONY: dev
dev:
	@echo "Entering dev environment.."
	@$(RUN) /bin/bash

.PHONY: test
test:
	@$(RUN) deno test
	

.PHONY: run
run:
	@$(RUN) deno run --allow-read main.ts

