# Readme

## How to get it running

The build/dev environment is based on Docker. This way you don't need to install anything in your local environment. Except for docker and a Unix shell environment, but that should be already on your development box anyway.

**Dependencies**

-   Terminal with a Unix shell and environment (eg. Linux, MacOS Terminal, Git Bash on Windows)
-   make
-   Docker

The build process is controlled by make trough the Makefile. The dev environment is a ubuntu container with the deno binary linked inside. You can enter the dev environment, run the program and run the tests.

### Run the program

```
make run
```

### Run the tests

```
make test
```

### Enter the dev container

```
make dev
```

To run the program inside the dev container:

```
$ make dev
# deno --allow-read main.ts
```

To run the tests inside the dev container:

```
$ make dev
# deno tests
```
