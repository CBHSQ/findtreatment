# Deploying

## Automatic (recommended)

We use [Federalist](https://federalist.18f.gov/) for production and "preview" deployments.

Federalist is integrated with Github such that on each push to the `master` branch, the site is automatically and built and deployed to production, where it is immediately available at `findtreatment.gov`. In addition, this process also happens for all other branches in Github, which will be available at URLs specified by Federalist.

In order to build the site, Federalist will call the `federalist` npm script (`npm run federalist`) and deploy everything that is in the `_site` folder. More information can be found in the [Federalist Docs](https://federalist.18f.gov/documentation/node-on-federalist/).

## Manual

### Building the site
To build the site manually, you'll need  `node` and `npm`  installed and have have completed the [steps to setup local development.](./developing.md).

Run `npm run federalist` from your command line or terminal.

The results of the build process will live in the `./build` folder in the root of the project.

### Deploying the built site
This is a "static" application that consists only of the files in the `build` folder after following the previous step. To deploy, place the contents of the `build` folder wherever your web server of choice expects and/or serves static files like `.html`, `.js`, and `.css`.


## Environment Variables
Since this is a "static" application all environment variables must be available at build time and must not contain anything considered sensitive. This application uses ".env" files and the `dotenv` library to provide environment variables to the  build environment. As long as the application is built using `npm run federalist` or `npm run build`, the environment variables will be available.

Variables are loaded in a cascading fashion to allow default values and overriding of those value per environment, that is `.env` is loaded followed by either `.env.development` or `.env.production` depending on the build environment.
