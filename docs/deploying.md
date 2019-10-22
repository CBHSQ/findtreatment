# Deploying

## Automatic (recommended)

We use [Federalist](https://federalist.18f.gov/) for production and "preview" deployments.

Federalist is integrated with Github such that on each push to the `master` branch, the site is automatically and built and deployed to production, where it is immediately available at `findtreatment.gov`. In addition, this process also happens for all other branches in Github, which will be available at URLs specified by Federalist.

In order to build the site, Federalist will call the `federalist` npm script (`npm run federalist`) and deploy everything that is in the `_site` folder. More information can be found in the [Federalist Docs](https://federalist.18f.gov/documentation/node-on-federalist/).

## Manual

### Building the site
To build the site manually, just run `npm run federalist` from your command line or terminal. This requires that `node` and `npm` are installed on the machine and the steps in [Developing](./developing.md) have already been completed. The results of the build process will live in the `build` folder in the root of the project.

### Deploying the built site
This is a "static" application that consists only of the files in the `build` folder after following the previous step. To deploy, just place the contents of the `build` folder wherever your server of choice expects static files.
