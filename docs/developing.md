# Developing

> This application relies on data provided by the SAMHSA Treatment Locator backend (https://findtreatment.samhsa.gov). We're not currently providing an alternative source of data in this repository or elsewhere.
While you can install and run this project locally, you will be unable to query data and receive results via the search interface.

## Getting the code

First you'll need to get the code onto your computer. The easiest way is to
clone it with git. If you're not familiar with git, a tool like
[Github Desktop](https://desktop.github.com/) can help make the experience
easier.

Most people will use the HTTPS link, but if you're a project contributor and
you have your SSH keys configured, you'll clone from the SSH link. You can
find the link by clicking the green "Clone or download" button above the file
listing on this page.

The link is https://github.com/18F/samhsa-prototype.git

If you're familiar with git and want to work from the command line, you
may run:

```shell
git clone https://github.com/18F/samhsa-prototype.git
```

If you can't use git for some reason, you may also download the most recent
code as [a ZIP file](https://github.com/18F/samhsa-prototype/archive/master.zip).

## Setting up the environment

In order to use Google APIs from your local development environment, you need to provide a suitable API key.
- Create a file named `.env.local` in the root of the project (this will not be checked into version control)
- Add the text `REACT_APP_GOOGLE_API_KEY=<YOUR API KEY>`
- Replace `<YOUR API KEY>` with a valid API key

## Running the application locally

Once you've checked out or otherwise retrieved the code, follow these steps to install the required dependencies, and start a development server in your local environment.

Run the following command from within the directory where this file, `README.md`, is located.

```
npm run dev
```

Navigate to `http://localhost:3000/`.

The app will automatically reload if you change any of the source files.

