Foo
[![CircleCI](https://circleci.com/gh/riskalyze/identity-service.svg?style=shield&circle-token=87d50143f55313237a600dbadf76d40b48713cbc)](https://circleci.com/gh/riskalyze/identity-service)
[![Maintainability](https://api.codeclimate.com/v1/badges/1d3ad6500bbff84e9f08/maintainability)](https://codeclimate.com/repos/5a317223c8dc2702a500082b/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1d3ad6500bbff84e9f08/test_coverage)](https://codeclimate.com/repos/5a317223c8dc2702a500082b/test_coverage)
# Identity Service ![Identity Service](identity.jpg)   

Description

# Prerequisites 
* [docker](https://docs.docker.com/engine/installation/)
    * Using homebrew `brew cask install docker`
* [node:8.9.3](https://nodejs.org/en/blog/release/v8.9.3/)
    * It is recommended you install [nvm](https://github.com/creationix/nvm#installation) which will allow you to install 8.9.3, as well as quickly switch to other versions of node if needed. 
* [npm:5.5.1](https://github.com/npm/npm/releases/tag/v5.5.1) 
    * This is included with node:8.9.3
* [Kitematic](https://kitematic.com/) (_Optional_)
    * Using homebrew `brew cask install kitematic`
    * Kitematic is a useful tool that provides instrumentation and other tools for running containers without the need to be intimate with dockers CLI.
# Getting Started
* Clone the repository `git clone git@github.com:riskalyze/identity-service.git`
* Install the project dependencies `npm install`
    * If this fails due to a Node or NPM version mismatch, run `nvm install 8.9.3`
* Make sure the Docker daemon is running
* Start the development environment `npm run dev`
    * Alternatively if you are using an IDEA based IDE an included run configuration `Development` can be used.
    * If this is very slow, try adding `127.0.0.1 localunixsocket` to your `/etc/hosts` file per this [bug report](https://github.com/docker/compose/issues/3419).

That is it you're done!

# Connecting to the MySql container
Since the MySql container has port 3306 mapped to port 4306 on your host machine you connect to the database as if it were running on your host machine. The username and password for the database can be defined in the `dev.env` file and is defaulted to `identity:identity`. With that in mind connecting to the mysql instance would look like this from the command line `mysql -h 127.0.0.1 -u identity -p identity`.       


# Local Development Environment
#### Local Development Architecture
![Local Development Architecture Diagram](https://www.lucidchart.com/publicSegments/view/f6673020-1413-44f9-b45a-2de0c98c5819/image.png)

The diagram above illustrates the major components involved in the local development environment. The next diagram describes the lifecycle of how changes get applied to the application running inside the node container.  

#### Local Development Life Cycle
![Local Development Lifecycle Diagram](https://www.lucidchart.com/publicSegments/view/d3cd9e56-2c4b-480b-a501-6b42e7365d30/image.png)

As the diagram above illustrates the local development process should be entirely seamless. As a developer makes changes to the source code, it will be built, tested and deployed to the node container automatically.

#### Lifecycle explained
1. The developer makes changes to a typescript source file within the `/src` directory
2. The `tsc -w` is watching the `/src` directory and detects that changes have been made and begins transpiling the code.
2. The transpiled code is written to the `/dist` which is mounted as a volume inside the node container under the `/app` directory
   1. The `jest --watch` is watching the `/dist` directory and detects that changes have been made and runs any tests applicable to the code changed
   2. The `nodemon` is watching the `/app` directory in the container and detects that changes have been made and restarts the application
3. The process begins again at step 1.

_Notice that **i** and **ii** happen simultaneously._ 
